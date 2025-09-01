import { Star, Users, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import WhatsAppButton from '@/components/WhatsAppButton';
import { teamMembers, companyValues } from '@/data/teamData';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-rose-50 via-white to-amber-50 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-rose-400/20 to-amber-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-serif mb-8 bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
            Our Story
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Srijna by Ritu Ritesh was born from a passion to celebrate the modern woman's elegance 
            while honoring the rich textile traditions of India. Every piece tells a story of 
            craftsmanship, culture, and contemporary style.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/designer-consult">
              <Button size="lg" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-lg">
                Book a Consultation
              </Button>
            </Link>
            <WhatsAppButton 
              size="lg" 
              variant="outline"
              className="border-2 border-rose-500 text-rose-600 hover:bg-rose-50"
              message="Hi! I'd love to learn more about Srijna's story and design philosophy."
            />
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6 text-gray-800">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Srijna
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="group text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/Portrait.jpg"
                alt="Ritu Ritesh"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400/20 to-amber-400/20 rounded-2xl blur-xl -z-10"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-gray-800">Founder's Vision</h2>
              <blockquote className="text-xl italic text-gray-700 leading-relaxed">
                "I believe that fashion is a form of self-expression that transcends boundaries. 
                At Srijna, we create pieces that honor our heritage while embracing contemporary 
                aesthetics, allowing every woman to tell her unique story through what she wears."
              </blockquote>
              <p className="text-lg font-medium text-rose-600">— Ritu Ritesh, Creative Director</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/designer-consult">
                  <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                    Meet the Designer
                  </Button>
                </Link>
                <Link to="/journal">
                  <Button variant="outline" className="border-rose-500 text-rose-600 hover:bg-rose-50">
                    Read Our Journal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6 text-gray-800">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals who bring our vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-rose-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specialties.slice(0, 2).map((specialty) => (
                      <span key={specialty} className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 font-medium">{member.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-rose-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-rose-200">Happy Clients</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-amber-200">Years Experience</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-emerald-200">Designs Created</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-purple-200">Artisan Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-600 via-pink-600 to-amber-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Let us help you find the perfect piece that celebrates your unique style and story.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/collections">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-rose-600">
                Explore Collections
              </Button>
            </Link>
            <WhatsAppButton 
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              message="Hi! I'd love to learn more about Srijna and schedule a consultation."
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}