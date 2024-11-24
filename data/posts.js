import ReactBasics from "../posts/ReactBasics";
import AdvancedReact from "../posts/AdvancedReact";
import JavaScriptTips from "../posts/JavaScriptTips";

export const posts = [
  {
    id: "react-basics",
    title: "React Basics",
    category: ["React", "Beginner"],
    content: ReactBasics,
  },
  {
    id: "advanced-react",
    title: "Advanced React",
    category: ["React", "Advanced"],
    content: AdvancedReact,
  },
  {
    id: "javascript-tips",
    title: "JavaScript Tips",
    category: ["JavaScript", "Tips"],
    content: JavaScriptTips,
  },
];

export const categories = [...new Set(posts.flatMap((post) => post.category))];
