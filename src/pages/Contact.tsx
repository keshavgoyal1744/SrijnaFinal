import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/Layout';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-serif mb-8 bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have questions about our collections, 
            need styling advice, or want to schedule a consultation, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif mb-8 text-gray-800">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800">Visit Our Studio</h3>
                      <p className="text-gray-600 leading-relaxed">
                        123 Fashion District, Designer Lane<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800">Call Us</h3>
                      <p className="text-gray-600">
                        +91 98765 43210<br />
                        +91 87654 32109
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800">Email Us</h3>
                      <p className="text-gray-600">
                        hello@srijna.com<br />
                        orders@srijna.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800">Studio Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 10:00 AM - 7:00 PM<br />
                        Sunday: 11:00 AM - 5:00 PM<br />
                        <span className="text-sm text-rose-600">*By appointment only</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-gradient-to-r from-rose-50 to-amber-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Quick Contact</h3>
                <div className="space-y-4">
                  <WhatsAppButton 
                    className="w-full bg-green-600 hover:bg-green-700 justify-center"
                    message="Hi! I'd like to get in touch with the Srijna team."
                  />
                  <Button 
                    variant="outline" 
                    className="w-full border-rose-500 text-rose-600 hover:bg-rose-50"
                    onClick={() => window.location.href = 'tel:+919815660666'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-amber-500 text-amber-600 hover:bg-amber-50"
                    onClick={() => window.location.href = 'mailto:hello@srijna.com'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-serif mb-8 text-gray-800">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Name *</label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                          className="border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Phone</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Your phone number"
                          className="border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Subject</label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-rose-500 focus:ring-rose-500">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="consultation">Design Consultation</SelectItem>
                          <SelectItem value="order">Order Support</SelectItem>
                          <SelectItem value="custom">Custom Design</SelectItem>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Message *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your requirements, questions, or how we can help you..."
                        required
                        rows={6}
                        className="border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4 text-gray-800">Find Our Studio</h2>
            <p className="text-lg text-gray-600">Visit us for personalized consultations and fittings</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-[16/9] bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive map would be displayed here</p>
                <p className="text-sm text-gray-500 mt-2">123 Fashion District, Designer Lane, Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">How do I book a consultation?</h3>
                <p className="text-gray-600 text-sm">You can book a consultation through our website, WhatsApp, or by calling us directly. We recommend booking at least a week in advance.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">Do you offer international shipping?</h3>
                <p className="text-gray-600 text-sm">Yes, we ship worldwide. Shipping costs and delivery times vary based on location. Contact us for specific details.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">Can I customize existing designs?</h3>
                <p className="text-gray-600 text-sm">Absolutely! We offer customization services for colors, fabrics, and design elements to suit your preferences.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">What is your return policy?</h3>
                <p className="text-gray-600 text-sm">We offer a 15-day return policy for items in original condition. Custom pieces have different terms which we'll discuss during consultation.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">How long does custom work take?</h3>
                <p className="text-gray-600 text-sm">Custom pieces typically take 4-8 weeks depending on complexity. We'll provide a timeline during your consultation.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">Do you offer styling services?</h3>
                <p className="text-gray-600 text-sm">Yes, our styling consultants can help you create complete looks and choose accessories for any occasion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}