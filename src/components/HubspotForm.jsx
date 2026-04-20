import { useEffect } from 'react';

const HubspotForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js-na2.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '243108537',
          formId: 'a1f45716-cb77-44d0-b081-fcc7f6206e32',
          region: 'na2',
          target: '#hubspotForm',
          onFormReady: function() {
            // Add custom styles for white labels and input text
            const style = document.createElement('style');
            style.innerHTML = `
              #hubspotForm label, #hubspotForm .hs-form-field label {
                color: #fff !important;
              }
              #hubspotForm input, #hubspotForm textarea, #hubspotForm select {
                color: #fff !important;
                background: rgba(255,255,255,0.08) !important;
                border-color: #fff !important;
              }
              #hubspotForm ::placeholder {
                color: #fff !important;
                opacity: 0.8 !important;
              }
            `;
            document.head.appendChild(style);
          }
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return <div id="hubspotForm" />;
};

export default HubspotForm; 