import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Neha Kapoor",
    location: "Chandigarh, India",
    rating: 5,
    review: "The pure georgette saree I ordered was breathtaking! The embroidery was flawless, and the sizing was absolutely perfect. Arrived earlier than expected.",
    product: "Embroidered Georgette Saree",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 2,
    name: "Rajesh Verma",
    location: "Chandigarh, India",
    rating: 5,
    review: "My custom kurta-pajama set was stitched to perfection. Excellent handwork and a great variety of color choices. Definitely ordering again.",
    product: "Custom Kurta-Pajama",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 3,
    name: "Aarti Mehra",
    location: "Ludhiana, India",
    rating: 5,
    review: "The silk saree I received was of unmatched quality! The zari detailing was exquisite and the fit was spot on. Excellent customer service.",
    product: "Zari Silk Saree",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 4,
    name: "Pooja Sethi",
    location: "Chandigarh, India",
    rating: 5,
    review: "I ordered a hand-block printed kurti and it was perfect. Vibrant colors, premium fabric, and it arrived just in time for my event.",
    product: "Hand-Block Printed Kurti",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 5,
    name: "Manish Sharma",
    location: "Gurgaon, India",
    rating: 5,
    review: "Outstanding tailoring on my sherwani! The handwork was rich and intricate, and the fitting could not have been better.",
    product: "Wedding Sherwani",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 6,
    name: "Sneha Rani",
    location: "Chandigarh, India",
    rating: 5,
    review: "My lehenga was beyond expectations! Beautiful beadwork and the fabric felt truly luxurious. They even expedited my order without extra charge.",
    product: "Designer Bridal Lehenga",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 7,
    name: "Deepak Yadav",
    location: "Ludhiana, India",
    rating: 4,
    review: "Really impressed with my kurta-pajama purchase. The stitching is neat, the fabric feels premium, and I loved the customization options.",
    product: "Premium Kurta-Pajama",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 8,
    name: "Anjali Nair",
    location: "Bangalore, India",
    rating: 5,
    review: "The cotton suit set I ordered was both elegant and comfortable. High-quality fabric and perfect measurements. Highly recommended!",
    product: "Cotton Suit Set",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 9,
    name: "Vikram Singh",
    location: "Chandigarh, India",
    rating: 5,
    review: "Fantastic work on my hand-embroidered kurta. The colors were rich and the fitting was exactly as I specified.",
    product: "Hand-Embroidered Kurta",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 10,
    name: "Kiran Bhatia",
    location: "Chandigarh, India",
    rating: 5,
    review: "Beautiful phulkari dupatta! The craftsmanship is unmatched and the colors are so vibrant. Arrived neatly packed and on time.",
    product: "Phulkari Dupatta",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 11,
    name: "Rohit Malhotra",
    location: "Gurgaon, India",
    rating: 4,
    review: "Very happy with my kurta-pajama. The linen fabric is premium quality and the fit was exactly as per my measurements.",
    product: "Linen Kurta-Pajama",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 12,
    name: "Simran Kaur",
    location: "Ludhiana, India",
    rating: 5,
    review: "My patiala suit was stitched perfectly and the dupatta embroidery was gorgeous. The team was very helpful in finalizing the design.",
    product: "Patiala Suit",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 13,
    name: "Priyanka Joshi",
    location: "Chandigarh, India",
    rating: 5,
    review: "Excellent service! My organza saree fit like a glove and the fabric quality was top-notch. Definitely ordering more.",
    product: "Organza Saree",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 14,
    name: "Siddharth Jain",
    location: "Mumbai, India",
    rating: 5,
    review: "Great quality and finish on my kurta-pajama set. Loved the detailing on the cuffs and the variety of fabrics available.",
    product: "Embroidered Kurta-Pajama",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 15,
    name: "Ritu Malani",
    location: "Chandigarh, India",
    rating: 5,
    review: "Absolutely loved my chiffon saree. The drape is beautiful and the embroidery work is intricate and neat.",
    product: "Chiffon Saree",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 16,
    name: "Ankita Desai",
    location: "Chandigarh, India",
    rating: 5,
    review: "The silk salwar kameez I ordered was delivered earlier than expected. The fit and fabric quality are both exceptional.",
    product: "Silk Salwar Kameez",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 17,
    name: "Aman Kapoor",
    location: "Rajasthan, India",
    rating: 5,
    review: "Perfect fit on my tailored kurta. The threadwork was clean and elegant, and they offered plenty of customization options.",
    product: "Tailored Kurta",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 18,
    name: "Shreya Iyer",
    location: "Chandigarh, India",
    rating: 5,
    review: "My kanjeevaram saree is stunning! The zari is authentic and the fall of the saree is perfect. Customer support was amazing.",
    product: "Kanjeevaram Saree",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 19,
    name: "Harsh Mehta",
    location: "Chandigarh, India",
    rating: 4,
    review: "Loved the fabric and finishing on my pathani kurta. The delivery was quick and the color selection was great.",
    product: "Pathani Kurta",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 20,
    name: "Megha Choudhary",
    location: "Chandigarh, India",
    rating: 5,
    review: "I ordered an urgent lehenga and they processed it in record time without compromising quality. The beadwork is fabulous.",
    product: "Urgent Bridal Lehenga",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 21,
    name: "Anita Singh",
    location: "Chandigarh, India",
    rating: 5,
    review: "Outstanding quality and design! The kurta set was comfortable and elegant. Will definitely order again for my next occasion.",
    product: "Cotton Kurta Set",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 22,
    name: "Roshni Bhatia",
    location: "New Zealand",
    rating: 5,
    review: "Incredible fusion gown! The sequin work was breathtaking and it fit like a dream. Perfect for our cultural event.",
    product: "Indo-Western Gown",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 23,
    name: "Kavitha Reddy",
    location: "Bangalore, India",
    rating: 4,
    review: "Lovely kurti with beautiful block prints. The fabric quality is excellent and the colors are vibrant. Highly recommended!",
    product: "Designer Kurti",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 24,
    name: "Ananya Sharma", 
    location: "USA",
    rating: 5,
    review: "Amazing craftsmanship! I ordered a custom lehenga and it was delivered exactly as I envisioned. The international shipping was smooth.",
    product: "Custom Bridal Lehenga",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 25,
    name: "Meera Patel",
    location: "USA", 
    rating: 4,
    review: "Beautiful anarkali suit with excellent mirror work. The fit was perfect and I received so many compliments at the function.",
    product: "Designer Anarkali",
    image: "/placeholder.svg",
    verified: true
  },
  {
    id: 26,
    name: "Priya Sharma",
    location: "Chandigarh, India",
    rating: 5,
    review: "Absolutely stunning saree! The quality of silk and the intricate zari work exceeded my expectations. Perfect for my sister's wedding.",
    product: "Royal Silk Saree",
    image: "/placeholder.svg",
    verified: true
  }
];


const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); // Move every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const getVisibleReviews = () => {
    const visibleCount = 3;
    const result = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % reviews.length;
      result.push(reviews[index]);
    }
    
    return result;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-luxury-gold text-luxury-gold' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-deep mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-luxury-charcoal max-w-3xl mx-auto">
            Join thousands of satisfied customers worldwide who trust us for their special occasions
          </p>
        </div>

        {/* Moving Reviews Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out gap-6"
            style={{ 
              transform: `translateX(-${(currentIndex * 10) / 3}%)`,
              width: `${(reviews.length * 100) / 3}%`
            }}
          >
            {reviews.map((review, index) => (
              <div 
                key={review.id} 
                className="flex-shrink-0"
                style={{ width: `${100 / reviews.length}%` }}
              >
                <Card className="h-full bg-background/80 backdrop-blur-sm border-luxury-rose hover:shadow-luxury transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-luxury-deep">{review.name}</h4>
                          {review.verified && (
                            <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-luxury-charcoal">{review.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                      {renderStars(review.rating)}
                    </div>

                    <div className="relative mb-4">
                      <Quote className="absolute -top-2 -left-2 h-6 w-6 text-luxury-gold/30" />
                      <p className="text-luxury-charcoal leading-relaxed pl-4">
                        {review.review}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-luxury-rose/20">
                      <p className="text-sm font-medium text-luxury-deep">
                        Product: {review.product}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, page) => (
            <button
              key={page}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === page
                  ? 'bg-luxury-gold scale-125'
                  : 'bg-luxury-charcoal/30 hover:bg-luxury-charcoal/50'
              }`}
              onClick={() => setCurrentIndex(page * 3)}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-luxury-deep mb-2">300+</div>
            <div className="text-sm text-luxury-charcoal">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-luxury-deep mb-2">5★</div>
            <div className="text-sm text-luxury-charcoal">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-luxury-deep mb-2">4+</div>
            <div className="text-sm text-luxury-charcoal">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-luxury-deep mb-2">10+</div>
            <div className="text-sm text-luxury-charcoal">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;