import React, { useState } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { LayoutGrid } from './ui/layout-grid';

const initialCards = [
  {
    id: 1,
    content: "",
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: "",
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: "",
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: "",
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const GenerateImage = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cards, setCards] = useState(initialCards);
  const [Image, setImage] = useState([]);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    
    try {
      console.log("Generating image for:", prompt);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Logic to update cards with new image would go here
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-4 w-full h-full px-6 md:px-12">
        <h1 className="text-4xl font-bold text-muted-foreground">Generate Image with AI</h1>
        <p className="text-sm text-gray-500 dark:text-white-600">
            Create your own imagined Text to Image with the help of AI
        </p>
        <div className="flex flex-col items-center gap-4 w-full">
          <Textarea 
            placeholder="Write a prompt to generate Image" 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full"
          />
          <Button className="cursor-pointer"
            onClick={handleGenerate} 
            disabled={loading || !prompt}
          >
            {loading ? "Generating..." : "Generate Image"}
          </Button>
          {error && <p className="px-4 py-3 border-red-500 rounded w-full max-w-2xl">Error:{error.message}</p>}
        </div>
        <div className="flex-1 min-h-[500px]">
            <div className="h-full w-full">
               <LayoutGrid cards={cards}/>
            </div>  
        </div>
    </section>
  )
}

export default GenerateImage;