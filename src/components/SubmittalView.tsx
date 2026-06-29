import React, { useState } from 'react';
import { 
  FileText, ClipboardCheck, ArrowUpRight, ArrowDownToLine, Phone, Mail, 
  HelpCircle, CheckCircle, Info, Send 
} from 'lucide-react';

export default function SubmittalView() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: ''
  });
  const [selectedDocs, setSelectedDocs] = useState<string[]>(['TDS']);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const docOptions = [
    { id: 'TDS', label: 'Technical Data Sheet' },
    { id: 'Catalogs', label: 'Product Catalogue' },
    { id: 'MethodStatement', label: 'Method Statement' },
    { id: 'TestCerts', label: 'Test Certificates' },
    { id: 'SampleBlocks', label: 'Sample Blocks (on request)' },
    { id: 'ShopDrawings', label: 'Shop Drawings (where required)' }
  ];

  const handleDocChange = (id: string) => {
    if (selectedDocs.includes(id)) {
      setSelectedDocs(selectedDocs.filter(item => item !== id));
    } else {
      setSelectedDocs([...selectedDocs, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div id="submittal-package-container" className="pt-[88px]">
      
      {/* PAGE INTRO */}
      <section id="submittal-intro" className="bg-[#03303A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-semibold">Consultant Submittals</span>
            <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-white">
              Consultant Submittal Package.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              If you are specifying Raya Engineering products on a project, we make the approval process straightforward. We provide a complete material submittal package with everything your consultant team needs to review, approve, and proceed.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS INCLUDED & WHO IS THIS FOR */}
      <section id="submittal-breakdown" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* What is Included (Left) */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-display font-bold text-lg text-[#03303A] uppercase tracking-wider border-b border-slate-100 pb-3 flex items-center space-x-2">
                <FileText className="w-5 h-5 text-[#E2A855]" />
                <span>What is Included in our submittal package?</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Technical Data Sheet', desc: 'Sizing spec charts, thermal conductivity coefficients, and absorption limits.' },
                  { name: 'Product Catalogue', desc: 'Entire manufacturing lineup including structural level blocks and face screens.' },
                  { name: 'Method Statement', desc: 'On-site installation workflows, block alignment processes, and mortar tolerances.' },
                  { name: 'Test Certificates', desc: 'Hydraulic compressive test results and fire safety validations.' },
                  { name: 'Sample Blocks', desc: 'Physical block samples delivered as specimens for physical inspection.' },
                  { name: 'Shop Drawings', desc: 'Custom structural drawings provided for specific high-elevation facade layouts' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                    <h4 className="font-display font-bold text-xs sm:text-sm text-[#03303A]">{item.name}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who is this for (Right) */}
            <div className="lg:col-span-6 space-y-6 bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200">
              <h3 className="font-display font-bold text-lg text-[#03303A] uppercase tracking-wide border-b border-slate-250 pb-3">
                Who stands to benefit from this?
              </h3>
              
              <ul className="space-y-4">
                {[
                  { title: 'Structural & Civil Engineers', text: 'Specifying block aggregates holding extreme lightweight ratings and ASTM C495 guidelines.' },
                  { title: 'Quantity Surveyors', text: 'Pricing cellular blocks, interlocking alignment speeds, and lower plaster thickness volumes directly into Bill of Quantities (BOQ).' },
                  { title: 'Project Managers & Main Contractors', text: 'Managing material submittal packages and speedy on-site alignment approvals seamlessly.' },
                  { title: 'Architects & Interior Designers', text: 'Incorporating CLC lightweight walls or GRP intricate repeating pattern screen layouts into custom blueprints.' },
                  { title: 'Distributors & Resellers', text: 'Sourcing premium, highly workable masonry run blocks for Nigerian construction hubs.' }
                ].map((profile, idx) => (
                  <li key={idx} className="flex items-start space-x-3.5 text-xs sm:text-sm">
                    <div className="p-1 rounded-full bg-[#03303A] text-white shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#E2A855]" />
                    </div>
                    <div>
                      <span className="block font-semibold text-[#03303A]">{profile.title}</span>
                      <span className="text-slate-500 leading-relaxed font-light">{profile.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* HOW TO REQUEST SUBMITTAL FORM */}
      <section id="submittal-form-section" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs uppercase font-mono text-[#E2A855] font-bold block">Digital Dispatch</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A]">Request Submittal Package</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Fill in the specification request and our factory support staff will respond within 2 business days.</p>
          </div>

          {success ? (
            <div className="bg-white border border-emerald-300 p-8 rounded-xl text-center shadow-md space-y-4 animate-in zoom-in-95 duration-200">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="font-display font-bold text-xl text-[#03303A]">Submittal Requested Successfully!</h3>
              <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your submittal requests (<strong>{selectedDocs.join(', ')}</strong>) has been processed and routed to <strong className="text-[#03303A]">Info@raya.ng</strong>. 
              </p>
              <div className="text-xs text-slate-400 font-mono">
                Project Sector: {formData.projectType} · Reference ID: RE-{Math.floor(Math.random() * 9000) + 1000}
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSuccess(false);
                    setFormData({ fullName: '', company: '', email: '', phone: '', projectType: 'Residential', message: '' });
                    setSelectedDocs(['TDS']);
                  }}
                  className="px-5 py-2.5 bg-[#03303A] text-white font-semibold text-xs uppercase tracking-wider rounded h-10 cursor-pointer hover:bg-[#054857]"
                >
                  Request another document
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200 p-6 md:p-10 rounded-xl space-y-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-600 mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="e.g. Engr. Kunle Alabi"
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded text-sm text-[#03303A] focus:outline-none focus:border-[#03303A]"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-600 mb-2">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="e.g. Alabi & Partners Civil Ltd"
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded text-sm text-[#03303A] focus:outline-none focus:border-[#03303A]"
                  />
                </div>

                {/* Email address */}
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-600 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="e.g. k.alabi@partners.ng"
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded text-sm text-[#03303A] focus:outline-none focus:border-[#03303A]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-600 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="e.g. +234 803 ..."
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded text-sm text-[#03303A] focus:outline-none focus:border-[#03303A]"
                  />
                </div>

                {/* Project Type */}
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-600 mb-2">
                    Sector Type
                  </label>
                  <select 
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded text-sm text-[#03303A] focus:outline-none focus:border-[#03303A]"
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>High-Rise</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Multi Documentation Requirement Boxes */}
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-600 mb-3">
                    Select Required Materials:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {docOptions.map((doc) => {
                      const isChecked = selectedDocs.includes(doc.id);
                      return (
                        <div 
                          key={doc.id}
                          onClick={() => handleDocChange(doc.id)}
                          className={`p-3 rounded border text-xs font-medium font-mono cursor-pointer transition-colors flex items-center space-x-3 ${
                            isChecked 
                              ? 'bg-[#03303A]/5 border-[#03303A] text-[#03303A]' 
                              : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-600'
                          }`}
                        >
                          <span className={`w-4.5 h-4.5 border rounded flex items-center justify-center shrink-0 transition-colors ${
                            isChecked ? 'bg-[#03303A] text-white border-[#03303A]' : 'bg-white border-slate-350'
                          }`}>
                            {isChecked && <CheckCircle className="w-3.5 h-3.5" />}
                          </span>
                          <span>{doc.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Message */}
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase font-mono tracking-wider font-semibold text-slate-600 mb-2">
                    Message / Special specifications requested
                  </label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Detail any block sizing thresholds, delivery timelines or site details..."
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded text-sm text-[#03303A] focus:outline-none focus:border-[#03303A]"
                  />
                </div>

              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-100">
                <span className="text-slate-400 text-xs text-left leading-relaxed">
                  * All files generated will route directly to <strong>Info@raya.ng</strong>.
                </span>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#E2A855] hover:bg-[#c99042] text-[#03303A] font-bold text-xs uppercase tracking-wider rounded shadow-md cursor-pointer transition-all disabled:opacity-75"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting Form...' : 'Submit Submittal Request'}</span>
                </button>
              </div>
            </form>
          )}

          {/* Alternative contacts */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            <div className="p-5 border border-slate-200 rounded-lg bg-white flex flex-col items-center justify-center space-y-1">
              <Phone className="w-5 h-5 text-[#E2A855]" />
              <span className="font-mono text-xs font-semibold text-[#03303A] pt-1">Direct Call / WhatsApp</span>
              <a href="tel:+2347037686707" className="text-sm font-bold text-slate-700 hover:text-[#03303A]">
                +234 703 768 6707
              </a>
            </div>
            <div className="p-5 border border-slate-200 rounded-lg bg-white flex flex-col items-center justify-center space-y-1">
              <Mail className="w-5 h-5 text-[#E2A855]" />
              <span className="font-mono text-xs font-semibold text-[#03303A] pt-1">Email Enquiries</span>
              <a href="mailto:Info@raya.ng" className="text-sm font-bold text-slate-700 hover:text-[#03303A]">
                Info@raya.ng
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
