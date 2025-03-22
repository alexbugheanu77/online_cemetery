import { FaCheck } from 'react-icons/fa';
import MainLayout from '@/components/layout/MainLayout';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Basic features for individuals looking to create a simple memorial.',
    features: [
      'Create 1 memorial page',
      'Upload up to 10 photos',
      'Basic customization options',
      'Visitor comments',
      'Share on social media',
    ],
    buttonText: 'Get Started',
    buttonLink: '/signup',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '$9.99',
    period: 'per month',
    description: 'Advanced features for families wanting to create a comprehensive memorial.',
    features: [
      'Create unlimited memorial pages',
      'Unlimited photo and video uploads',
      'Advanced customization options',
      'Family tree integration',
      'Virtual candles and flowers',
      'AI-powered legacy assistant',
      'Custom domain name',
      'Ad-free experience',
      'Priority support',
    ],
    buttonText: 'Choose Premium',
    buttonLink: '/signup?plan=premium',
    highlighted: true,
  },
  {
    name: 'Lifetime',
    price: '$199',
    period: 'one-time payment',
    description: 'A permanent memorial with all premium features for generations to come.',
    features: [
      'All Premium features',
      'Lifetime access with no recurring fees',
      'Guaranteed preservation',
      'Family historian account access',
      'Annual memorial service reminders',
      'Memorial backup service',
    ],
    buttonText: 'Choose Lifetime',
    buttonLink: '/signup?plan=lifetime',
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300">
            Choose the plan that best suits your needs to create a lasting digital memorial for your loved ones.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`rounded-lg overflow-hidden ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-indigo-600 to-indigo-800 border-2 border-indigo-400 transform md:-translate-y-4 shadow-xl' 
                  : 'bg-slate-800 border border-slate-700'
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
                <p className={`mb-6 ${plan.highlighted ? 'text-gray-200' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
                
                <a 
                  href={plan.buttonLink}
                  className={`block text-center py-3 px-6 rounded-md font-medium transition ${
                    plan.highlighted 
                      ? 'bg-white text-indigo-600 hover:bg-gray-100' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
              
              <div className={`border-t ${plan.highlighted ? 'border-indigo-500' : 'border-slate-700'} p-8`}>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <FaCheck className={`h-5 w-5 mr-3 ${plan.highlighted ? 'text-indigo-300' : 'text-indigo-500'} flex-shrink-0 mt-0.5`} />
                      <span className={plan.highlighted ? 'text-gray-200' : 'text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Can I upgrade my plan later?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade from the Free plan to either Premium or Lifetime at any time. Your existing memorial content will be preserved and enhanced with the additional features of your new plan.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">What happens to the memorial if I cancel my subscription?</h3>
              <p className="text-gray-300">
                If you cancel your Premium subscription, your memorial will revert to the Free plan features. Any content that exceeds the Free plan limits will be archived but not displayed until you reactivate your subscription. Lifetime plan purchases are permanent and cannot be canceled.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">How long will the memorial be preserved?</h3>
              <p className="text-gray-300">
                Free and Premium memorials are preserved as long as the account is active. Lifetime memorials are guaranteed to be preserved for at least 99 years, with provisions for extending preservation through future technologies.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Can multiple family members contribute to a memorial?</h3>
              <p className="text-gray-300">
                Yes, the Premium and Lifetime plans allow you to designate co-administrators who can contribute to and manage the memorial page. This feature is particularly useful for families who want to collaborate on preserving memories together.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-4">Still have questions about our pricing plans?</p>
          <a href="/contact" className="btn-outline py-2 px-6 inline-block">
            Contact Us
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
