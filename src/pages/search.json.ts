import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const blogs = await getCollection("blog");
  const letters = await getCollection("letters");

  const searchIndex = [
    ...blogs.map((post) => ({
      type: "blog" as const,
      slug: post.id,
      title: post.data.title,
      title_jp: post.data.title_jp || "",
      title_id: post.data.title_id || "",
      description: post.data.description || "",
      description_jp: post.data.description_jp || "",
      description_id: post.data.description_id || "",
      category: post.data.category || "",
      tags: post.data.tags || [],
      url: `/blog/${post.id}/`,
    })),
    ...letters.map((letter) => ({
      type: "letter" as const,
      slug: letter.id,
      title: letter.data.title,
      title_jp: letter.data.title_jp || "",
      title_id: letter.data.title_id || "",
      description: letter.data.description || "",
      description_jp: letter.data.description_jp || "",
      description_id: letter.data.description_id || "",
      sender: letter.data.sender || "",
      recipient: letter.data.recipient || "",
      url: `/letters/${letter.id}/`,
    })),
  ];

  return new Response(JSON.stringify(searchIndex), {
    headers: { "Content-Type": "application/json" },
  });
};
