import Link from "next/link";
import React from "react";
import { Suspense } from "react/cjs/react.production.min";

const Form = ({ type, post, setPost, isSubmiting, handleSubmit }) => {
  return (
    <Suspense>
      <section className="w-full max-w-full flex-center flex-col">
        <h1 className="head_text text-left">
          <span className="blue_gradient">{type} Post</span>
        </h1>
        <p className="desc text-left max-w-md">
          {type} and share amazing prompts with the world and let your
          imagination run wild with any AI-powered platform
        </p>
        <form
          action=""
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        >
          <label htmlFor="">
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Your AI prompt
            </span>
          </label>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here"
            required
            className="form_textarea"
          />

          <label htmlFor="">
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Tag{" "}
              <span className="font-normal">
                (product, webdevelopment, idea)
              </span>
            </span>
          </label>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tags"
            required
            className="form_input"
          />
          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmiting}
              className="px-5 py-1.5 bg-primary-orange rounded-full text-white text-sm  "
            >
              {isSubmiting ? `${type}ing...` : type}
            </button>
          </div>
        </form>
      </section>
    </Suspense>
  );
};

export default Form;
