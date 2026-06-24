import React, { useState, useRef } from 'react';
import { 
  Phone, Mail, Globe, MapPin, Send, CheckCircle, HelpCircle, 
  Handshake, Truck, ArrowRight, ShieldCheck, ChevronRight 
} from 'lucide-react';

export default function ContactView() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    userRole: 'Contractor',
    projectType: 'Residential',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  const handleDistributorEnquiry = () => {
    setFormData(prev => ({ ...prev, userRole: 'Distributor', message: 'Hi Raya Team, I am interested in exploring building materials distribution opportunities.' }));
    setSuccess(false);
    
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  };

  return (
    <div id="contact-page-container" className="pt-[68px] md:pt-[80px]">
      
      {/* PAGE INTRO */}
      <section id="contact-intro" className="bg-[#03303A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-semibold">Get In Touch</span>
            <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-white">
              Let&apos;s talk about your project.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Place an order, request a submittal package, ask a technical question, or discuss a distribution partnership. We respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* CORE CONTACT DETAILS & ENQUIRY FORM */}
      <section id="contact-form-grid" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Column (Left) */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <h3 className="font-display font-bold text-lg text-[#03303A] uppercase tracking-wide">
                  Corporate Directory
                </h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  Have an active development blueprint or a specified BOQ list? Reach out directly via our verified communication pathways.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone / Whatsapp */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-50 rounded-lg text-[#E2A855] border border-slate-150 shadow-xs shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-400">Phone / WhatsApp</span>
                    <a href="tel:+2347037686707" className="text-base font-bold text-[#03303A] hover:text-[#E2A855] transition-colors leading-relaxed block mt-0.5">
                      +234 703 768 6707
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-50 rounded-lg text-[#E2A855] border border-slate-150 shadow-xs shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-400">Corporate Email</span>
                    <a href="mailto:Info@raya.ng" className="text-base font-bold text-[#03303A] hover:text-[#E2A855] transition-colors leading-relaxed block mt-0.5">
                      Info@raya.ng
                    </a>
                  </div>
                </div>

                {/* Website URL */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-50 rounded-lg text-[#E2A855] border border-slate-150 shadow-xs shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-400">Official Web</span>
                    <a href="https://www.raya.ng" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-[#03303A] hover:text-[#E2A855] transition-colors leading-relaxed block mt-0.5">
                      www.raya.ng
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-50 rounded-lg text-[#E2A855] border border-slate-150 shadow-xs shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-400">Registered Presence</span>
                    <span className="text-base font-bold text-[#03303A] leading-relaxed block mt-0.5">
                      Lagos, Nigeria
                    </span>
                    <span className="text-xs text-slate-400 font-light block">Factory site visits arranged on corporate requests.</span>
                  </div>
                </div>
              </div>

              {/* Physical Visit Prompt */}
              <div className="p-5 rounded-lg border border-slate-200 bg-slate-50 space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-[#03303A] font-bold uppercase tracking-wider font-mono">
                  <Truck className="w-4.5 h-4.5 text-[#E2A855]" />
                  <span>Nigeria Delivery Networks</span>
                </div>
                <p className="text-slate-500 leading-relaxed font-light">
                  We maintain bulk dispatch distribution pipelines supplying sites spanning diverse municipal destinations inside Lagos, Abuja and surrounding regional states.
                </p>
              </div>

            </div>

            {/* Interactive enquiry form (Right) */}
            <div className="lg:col-span-7">
              {success ? (
                <div className="bg-slate-50 border border-emerald-300 p-8 rounded-xl text-center shadow-sm space-y-4 animate-in zoom-in-95 duration-200">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="font-display font-bold text-xl text-[#03303A]">Enquiry Dispatched Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light max-w-md mx-auto">
                    Hi <strong className="text-slate-900">{formData.fullName}</strong>, thank you for your query. Our factory sales representatives will formulate quotes and reply to <strong className="text-[#03303A]">{formData.email}</strong> within 24 hours.
                  </p>
                  <div className="text-[11px] font-mono text-slate-400">
                    Routing details: Info@raya.ng · Role Registered: {formData.userRole}
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSuccess(false);
                        setFormData({ fullName: '', companyName: '', email: '', phone: '', userRole: 'Contractor', projectType: 'Residential', message: '' });
                      }}
                      className="px-5 py-2.5 bg-[#03303A] hover:bg-[#054857] text-white font-semibold text-xs uppercase tracking-wider rounded cursor-pointer transition-colors"
                    >
                      Draft another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form 
                  ref={formRef}
                  onSubmit={handleSubmit} 
                  className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-xl space-y-5 shadow-xs"
                >
                  <h3 className="font-display font-bold text-base text-[#03303A] uppercase tracking-wide border-b border-slate-200 pb-3">
                    Submit Project Request Form
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider font-semibold text-slate-500 mb-1.5">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="e.g. Alao Ibrahim"
                        className="w-full bg-white border border-slate-250 px-4 py-2.5 rounded text-sm text-[#03303A] focus:outline-none focus:border-[#03303A]"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider font-semibold text-slate-500 mb-1.5">
                        Company Name
                      </label>
                      <input 
                        type="text" 
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        placeholder="e.g. Ibrahim Developers Ltd"
                        className="w-full bg-white border border-slate-250 px-4 py-2.5 rounded text-sm text-[#03303A] focus:outline-none focus:border-[#03303A]"
                      />
                    </div>

                    {/* EmailAddress */}
                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider font-semibold text-slate-500 mb-1.5">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="e.g. info@ibrahimdevs.com"
                        className="w-full bg-white border border-slate-250 px-4 py-2.5 rounded text-sm text-[#03303A] focus:outline-none focus:border-[#03303A]"
                      />
                    </div>

                    {/* Phone/WhatsApp */}
                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider font-semibold text-slate-500 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="e.g. +234 812 ..."
                        className="w-full bg-white border border-slate-250 px-4 py-2.5 rounded text-sm text-[#03303A] focus:outline-none focus:border-[#03303A]"
                      />
                    </div>

                    {/* Role Dropdown */}
                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider font-semibold text-slate-500 mb-1.5">
                        I am a:
                      </label>
                      <select
                        value={formData.userRole}
                        onChange={(e) => setFormData({...formData, userRole: e.target.value})}
                        className="w-full bg-white border border-slate-250 px-3.5 py-2.5 rounded text-sm text-[#03303A] focus:outline-none"
                      >
                        <option>Contractor</option>
                        <option>Consultant</option>
                        <option>Developer</option>
                        <option>Distributor</option>
                        <option>Project Owner</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Project Dropdown */}
                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider font-semibold text-slate-500 mb-1.5">
                        Project Type:
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                        className="w-full bg-white border border-slate-250 px-3.5 py-2.5 rounded text-sm text-[#03303A] focus:outline-none"
                      >
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                        <option>High-Rise</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] uppercase font-mono tracking-wider font-semibold text-slate-500 mb-1.5">
                        Message
                      </label>
                      <textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Please elaborate on your project timelines, block density specifications (800 / 1000) or customized architectural facade elements..."
                        rows={5}
                        className="w-full bg-white border border-slate-250 px-4 py-2.5 rounded text-sm text-[#03303A] focus:outline-none focus:border-[#03303A]"
                      />
                    </div>

                  </div>

                  <div className="flex justify-end pt-3 border-t border-slate-200">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-[#03303A] hover:bg-[#054857] text-white font-bold text-xs uppercase tracking-wider rounded shadow-md cursor-pointer transition-colors"
                    >
                      <Send className="w-4 h-4 text-[#E2A855]" />
                      <span>{submitting ? 'Sending Request...' : 'Send Enquiry'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* PARTNERSHIP HIGHLIGHT SYSTEM */}
      <section id="partnership-program" className="py-16 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-2 text-[#E2A855]">
                <Handshake className="w-5 h-5 animate-pulse" />
                <span className="text-xs uppercase font-mono tracking-widest font-bold">Nigeria & West Africa program</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
                Interested in distributing our products?
              </h2>
              <div className="h-1 w-12 bg-[#E2A855] rounded"></div>
              <p className="text-slate-350 text-sm leading-relaxed font-light">
                We are open to distribution partnerships across Nigeria and West Africa. If you supply or distribute building materials, get in touch and we will discuss the opportunity.
              </p>
              <div className="flex items-center space-x-4 pt-2">
                <button
                  onClick={handleDistributorEnquiry}
                  className="inline-flex items-center space-x-2 px-5 py-3 bg-[#E2A855] hover:bg-[#c99042] text-[#03303A] font-bold text-xs uppercase tracking-wider rounded shadow-md cursor-pointer transition-colors"
                >
                  <span>Enquire About Distribution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4 font-sans text-xs">
              <div className="p-5 rounded border border-white/10 bg-white/5 space-y-1.5 hover:bg-white/10 transition-colors">
                <h4 className="font-display font-semibold text-white">Bulk Wholesaler Program</h4>
                <p className="text-slate-400 font-light leading-relaxed">Includes direct factory discount structures and prioritized casting queue scheduling.</p>
              </div>
              <div className="p-5 rounded border border-white/10 bg-white/5 space-y-1.5 hover:bg-white/10 transition-colors">
                <h4 className="font-display font-semibold text-white">Logistical Co-Shipping</h4>
                <p className="text-slate-400 font-light leading-relaxed">Coordinated pallet shipment deliveries directly to multi-site depots.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section id="what-happens-next" className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display font-medium text-xl text-[#03303A]">What happens next?</h3>
            <p className="text-xs text-slate-500 mt-1">Our prompt dispatch response system guarantees immediate follow-ups.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Send Your Enquiry', desc: 'Fill in the form with your project or enquiry details.' },
              { num: '2', title: 'We Review & Respond', desc: 'Our team gets back to you within 1 business day.' },
              { num: '3', title: 'We Sort You Out', desc: 'Order, submittal package, or distribution enquiry — we handle it.' }
            ].map((step, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col items-center text-center space-y-3 shadow-xs"
              >
                <div className="w-10 h-10 rounded-full bg-[#03303A] text-white flex items-center justify-center font-display font-extrabold text-sm font-mono">
                  {step.num}
                </div>
                <h4 className="font-display font-semibold text-[#03303A] text-sm">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
