import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    alt: "Romantic Sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    alt: "Couple Walking",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    alt: "Holding Hands",
  },
  {
    src: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    alt: "Cozy Moments",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-pink-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">
        Bizim Anılarımız
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-60 object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
