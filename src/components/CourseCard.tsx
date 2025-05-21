
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  imageUrl: string;
  popular?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  price,
  duration,
  level,
  imageUrl,
  popular = false,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        {popular && (
          <Badge className="absolute top-4 left-4 bg-vk-blue hover:bg-vk-indigo">
            Popular
          </Badge>
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <span className="text-vk-blue font-bold">{price}</span>
        </div>
        <CardDescription className="flex items-center gap-2">
          <Book size={16} />
          <span>{duration} • {level}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-vk-blue hover:bg-vk-indigo text-white w-full">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
