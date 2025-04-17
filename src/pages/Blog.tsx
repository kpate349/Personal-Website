
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "A comprehensive guide to setting up your first React project with TypeScript and best practices.",
    date: "April 10, 2023",
    category: "Development",
    readingTime: "8 min read"
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    excerpt: "Exploring how utility-first CSS can speed up your workflow and create consistent designs.",
    date: "March 22, 2023",
    category: "Design",
    readingTime: "6 min read"
  },
  {
    id: 3,
    title: "Building Accessible Web Applications",
    excerpt: "Important considerations and techniques for making your websites accessible to everyone.",
    date: "February 15, 2023",
    category: "Accessibility",
    readingTime: "10 min read"
  },
  {
    id: 4,
    title: "State Management in Modern React",
    excerpt: "Comparing different approaches to state management in React applications.",
    date: "January 30, 2023",
    category: "Development",
    readingTime: "12 min read"
  },
];

const Blog = () => {
  return (
    <div className="container px-4 mx-auto">
      <section className="py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 md:text-4xl">Blog</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Thoughts, tutorials, and insights about technology, design, and development.
          </p>
          
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
                <div className="mt-8 border-b"></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
