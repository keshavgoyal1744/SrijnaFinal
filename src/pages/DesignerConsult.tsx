import { useState } from 'react';
import { Upload, Calendar, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Layout from '@/components/Layout';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function DesignerConsult() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    budget: '',
    preferredDate: '',
    timeSlot: '',
    notes: '',
    referenceImages: [] as File[],
    consent: false
  });

  const occasions = [
    'Wedding', 'Reception', 'Engagement', 'Cocktail Party', 'Festival', 
    'Corporate Event', 'Anniversary', 'Birthday', 'Other'
  ];

  const budgetRanges = [
    'Under ₹50,000', '₹50,000 - ₹1,00,000', '₹1,00,000 - ₹2,00,000', 
    '₹2,00,000 - ₹5,00,000', 'Above ₹5,00,000'
  ];

  const timeSlots = [
    '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '2:00 PM - 3:00 PM', 
    '3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setFormData(prev => ({ ...prev, referenceImages: [...prev.referenceImages, ...files] }));
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      referenceImages: prev.referenceImages.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = () => {
    const whatsappMessage = `Hi! I'd like to schedule a designer consultation.

Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Occasion: ${formData.occasion}
Budget: ${formData.budget}
Preferred Date: ${formData.preferredDate}
Time Slot: ${formData.timeSlot}

Additional Notes: ${formData.notes}

I have ${formData.referenceImages.length} reference images to share. Looking forward to our consultation!`;

    // Simulate form submission
    setStep(4);
    
    // In a real app, you would send the form data to your backend here
    console.log('Form submitted:', formData);
    
    // Open WhatsApp after a short delay
    setTimeout(() => {
      const phoneNumber = "919876543210";
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  const isStepValid = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone;
      case 2:
        return formData.occasion && formData.budget;
      case 3:
        return formData.preferredDate && formData.timeSlot && formData.consent;
      default:
        return false;
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-4">Designer Consultation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book a personalized consultation with Ritu Ritesh to create your perfect ensemble. 
            Our design team will work with you to bring your vision to life.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= stepNumber 
                  ? 'bg-black text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {step > stepNumber ? <CheckCircle className="w-5 h-5" /> : stepNumber}
              </div>
              {stepNumber < 4 && (
                <div className={`w-16 h-1 mx-2 ${
                  step > stepNumber ? 'bg-black' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Steps */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>
              {step === 1 && "Personal Information"}
              {step === 2 && "Consultation Details"}
              {step === 3 && "Schedule & Preferences"}
              {step === 4 && "Consultation Booked!"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Consultation Details */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="occasion">Occasion *</Label>
                  <Select value={formData.occasion} onValueChange={(value) => handleInputChange('occasion', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      {occasions.map((occasion) => (
                        <SelectItem key={occasion} value={occasion}>{occasion}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget">Budget Range *</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Tell us about your style preferences, color choices, or any specific requirements..."
                    rows={4}
                  />
                </div>
                <div>
                  <Label>Reference Images (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-2">Upload inspiration images</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <Label htmlFor="file-upload" className="cursor-pointer">
                      <Button variant="outline" size="sm" asChild>
                        <span>Choose Files</span>
                      </Button>
                    </Label>
                  </div>
                  {formData.referenceImages.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {formData.referenceImages.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">{file.name}</span>
                          <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Schedule & Preferences */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="preferredDate">Preferred Date *</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <Label htmlFor="timeSlot">Preferred Time Slot *</Label>
                  <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange('timeSlot', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What to Expect</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 60-minute personalized consultation</li>
                    <li>• Style assessment and recommendations</li>
                    <li>• Fabric and color selection guidance</li>
                    <li>• Measurement taking (if needed)</li>
                    <li>• Timeline and pricing discussion</li>
                  </ul>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                  />
                  <Label htmlFor="consent" className="text-sm">
                    I agree to the terms and conditions and privacy policy. I consent to being contacted via WhatsApp for this consultation. *
                  </Label>
                </div>
              </div>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consultation Request Submitted!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for your interest in our designer consultation. We'll be in touch via WhatsApp shortly to confirm your appointment.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Next Steps</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Our team will contact you on WhatsApp within 2 hours to confirm your appointment details and answer any questions.
                  </p>
                </div>
                <WhatsAppButton 
                  message={`Hi! I just submitted a consultation request. My name is ${formData.name}. Could you please confirm my appointment for ${formData.preferredDate} at ${formData.timeSlot}?`}
                  className="w-full"
                />
              </div>
            )}

            {/* Navigation Buttons */}
            {step < 4 && (
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  disabled={step === 1}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => step === 3 ? handleSubmit() : setStep(step + 1)}
                  disabled={!isStepValid(step)}
                >
                  {step === 3 ? 'Submit Request' : 'Next'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
          <h3 className="font-semibold mb-2">Need Immediate Assistance?</h3>
          <p className="text-sm text-gray-600 mb-4">
            For urgent inquiries or to speak with our team directly, reach out via WhatsApp.
          </p>
          <WhatsAppButton 
            message="Hi! I have some questions about the designer consultation process. Could someone help me?"
            variant="outline"
          />
        </div>
      </div>
    </Layout>
  );
}