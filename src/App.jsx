import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HubspotForm from './components/HubspotForm';
import { Helmet } from 'react-helmet';

// Pages & Components
import Hero from './components/Hero';
import Services from './components/Services';
import TrustedBy from './components/TrustedBy';
import Accreditation from './components/Accreditation';
import MapSection from './components/MapSection';
import ValueProposition from './components/ValueProposition';
import CTA from './components/CTA';
import About from './pages/About';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Get Started Today.jsx';

// Compliance Edge pages
import HIPAAPage from './pages/ComplianceCompass/hipaa';
import SOC1And2Page from './pages/ComplianceCompass/soc1and2';
import NISTCSFPage from './pages/ComplianceCompass/nistcsf';
import HITRUST from './pages/ComplianceCompass/HITRUSTCertificationPage';
import PCIDSS from './pages/ComplianceCompass/PCIDSS';
import ISMS_ISO_IEC27001 from './pages/ComplianceCompass/ISNS';

// Governance Engine pages
import RISK from './pages/Governance Engine/RiskAssessment';
import Third from './pages/Governance Engine/Third-Party-Risk-Management';
import Governance from './pages/Governance Engine/Governance Framework Development';
import DataGovern from './pages/Governance Engine/Data Governance';
import Security from './pages/Governance Engine/Security Policy & Strategy Development';
import Shared_CISO from './pages/Governance Engine/Shared CISO as a Service';
import DPO from './pages/Governance Engine/DPO as a Service';
import DataPrivacyImpactAssessment from './pages/Governance Engine/Data Privacy Impact Assessment.jsx';

// Other pages
import Get_Started_Today from './pages/Get Started Today';
import SelectRegion from './pages/SelectRegion';
import ComingSoon from './pages/ComingSoon';
import ComplianceCompass from './pages/ComplianceCompass';
import GovernanceEngine from './pages/GovernanceEngine';
import ThreatAndVulnerability from './pages/ThreatAndVulnerability';
import Tools from './pages/tools.jsx';

// Select Regions
import MiddleEast from './pages/select-region/middleeast';
import SouthernAsia from './pages/select-region/SouthernAsia';
import Americas from './pages/select-region/America';
import SouthEastAsia from './pages/select-region/SouthEastAsia';
import Europe from './pages/select-region/Europe';

// Select Country pages
import UAE from './pages/select-region/Countries/UAE';
import KSA from './pages/select-region/Countries/KSA.jsx';
import Qatar from './pages/select-region/Countries/Qatar.jsx';  
import Bahrain from './pages/select-region/Countries/Bahrain.jsx';
import Oman from './pages/select-region/Countries/Oman.jsx';
import India from './pages/select-region/Countries/India.jsx';
import Bangladesh from './pages/select-region/Countries/Bangladesh.jsx';
import Nepal from './pages/select-region/Countries/Nepal.jsx';
import SriLanka from './pages/select-region/Countries/SriLanka.jsx';
import Maldives from './pages/select-region/Countries/Maldives.jsx';
import NorthAmerica from './pages/select-region/Countries/NorthAmerica.jsx';
import SouthAmerica from './pages/select-region/Countries/SouthAmerica.jsx';

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Home Page Component
const HomePage = () => (
  <>
    <Helmet>
      <title>Codezye Cyber – Agile Cyber Defense. Future-Ready Compliance</title>
      <meta
        name="description"
        content="Codezye Cyber is a trusted global provider of cybersecurity and compliance management solutions, committed to delivering end-to-end protection in an ever-evolving digital landscape. Our mission is to empower organizations with cutting-edge security technologies, expert-driven insights, and proactive compliance strategies to defend against modern cyber threats and ensure alignment with industry regulations and governance standards."
      />
    </Helmet>
    <Hero />
    <Services />
    <TrustedBy />
    <Accreditation />
    <MapSection />
    <ValueProposition />
    <CTA />
  </>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-codezye-bg">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/get-started" element={<Get_Started_Today />} />

            {/* Static Placeholder Routes */}
            <Route path="/workshops" element={<ComingSoon page="Workshops" />} />
            <Route path="/resources" element={<ComingSoon page="Resources" />} />
            <Route path="/careers" element={<ComingSoon page="Careers" />} />

            {/* Compliance Compass Pages */}
            <Route path="/services/hipaa" element={<HIPAAPage />} />
            <Route path="/services/soc-1-and-soc-2" element={<SOC1And2Page />} />
            <Route path="/services/nist-csf" element={<NISTCSFPage />} />
            <Route path="/services/hitrust" element={<HITRUST />} />
            <Route path="/services/pci-dss" element={<PCIDSS />} />
            <Route path="/services/isms-iso-iec-27001" element={<ISMS_ISO_IEC27001 />} />

            {/* Governance Engine Pages */}
            <Route path="/services/risk-assessment-and-management" element={<RISK />} />
            <Route path="/services/third-party-risk-management" element={<Third />} />
            <Route path="/services/governance-framework-development" element={<Governance />} />
            <Route path="/services/data-governance" element={<DataGovern />} />
            <Route path="/services/security-policy-and-strategy-development" element={<Security />} />
            <Route path="/services/virtual-or-shared-ciso-service" element={<Shared_CISO />} />
            <Route path="/services/dpo-as-a-service" element={<DPO />} />
            <Route path="/services/data-privacy-impact-assessment" element={<DataPrivacyImpactAssessment />} />

            {/* Region Pages */}
            <Route path="/select-region" element={<SelectRegion />} />
            <Route path="/select-region/middleeast" element={<MiddleEast />} />
            <Route path="/select-region/southernasia" element={<SouthernAsia />} />
            <Route path="/select-region/america" element={<Americas />} />
            <Route path="/select-region/southeastasia" element={<SouthEastAsia />} />
            <Route path="/select-region/europe" element={<Europe />} />

            {/* Country Pages */}
            <Route path="/select-region/countries/uae" element={<UAE />} />
            <Route path="/select-region/countries/ksa" element={<KSA />} />
            <Route path="/select-region/countries/qatar" element={<Qatar />} />
            <Route path="/select-region/countries/bahrain" element={<Bahrain />} />
            <Route path="/select-region/countries/oman" element={<Oman />} />
            <Route path="/select-region/countries/india" element={<India />} />
            <Route path="/select-region/countries/bangladesh" element={<Bangladesh />} />
            <Route path="/select-region/countries/nepal" element={<Nepal />} />
            <Route path="/select-region/countries/sri-lanka" element={<SriLanka />} />
            <Route path="/select-region/countries/maldives" element={<Maldives />} />
            <Route path="/select-region/countries/north-america" element={<NorthAmerica />} />
            <Route path="/select-region/countries/south-america" element={<SouthAmerica />} />

            {/* Utility Pages */}
            <Route path="/hubspot-form" element={<HubspotForm />} />
            <Route path="/compliance-compass" element={<ComplianceCompass />} />
            <Route path="/governance-engine" element={<GovernanceEngine />} />
            <Route path="/threat-and-vulnerability" element={<ThreatAndVulnerability />} />

            {/* Dynamic Routes */}
            <Route path="/services/:serviceName" element={<ComingSoon page="Service" />} />
            <Route path="/workshops/:workshopName" element={<ComingSoon page="Workshop" />} />

            {/* Fallback */}
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
