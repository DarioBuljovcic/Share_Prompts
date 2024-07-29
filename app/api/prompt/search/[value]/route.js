import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const prompt = (
      await Prompt.find({
        $or: [
          { prompt: { $regex: params?.value, $options: "i" } },
          { tag: { $regex: params?.value, $options: "i" } },
        ],
      }).populate("creator")
    ).reverse();
    if (!prompt) return new Response("Prompt not found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompt", { status: 500 });
  }
};
