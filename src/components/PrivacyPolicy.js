import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Foot from "./Foot";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({}));

function PrivacyPolicy() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.solutionsContainer}>
        <h1 className={classes.title} style={{ color: "black" }}>
          PRIVACY NOTICE <br />
        </h1>
        <h4>Introduction and Scope</h4>

        <p>
          Contentree (a trading name of Contentgine, Inc), together with its
          affiliates and aliases described below, (collectively, “Contentree”,
          “we”, “us”, “our”) takes the protection of personally identifiable
          information (“Personal Data”) very seriously. Contentree provides
          business customers (“Customers”) with lead generation services,
          including content syndication, data analytics and email marketing
          services, as well as our Content Indication Platform (collectively,
          the “Lead Generation Services”). This Privacy Notice (the “Notice”)
          addresses how we collect, receive, use, store, share, transfer and
          process your Personal Data, as well as your rights in determining what
          we do with the information collected via our website and in connection
          with our Lead Generation Services (collectively, the “Services”). This
          Notice does not apply to Personal Data we collect by other means, such
          as Personal Data of our employees.
        </p>
        <h4>Controllership</h4>
        <p>
          Within the scope of this Notice, Contentree (a trading name of
          Contentgine, Inc), acts as a data controller for the Personal Data we
          process when you visit our websites or when you interact with us.
          Contentree is acting as Data Processor for the Personal Data we
          process through our Services. For more information about this, visit
        </p>
        <h4>Categories of Personal Data</h4>
        <p>
          In this privacy policy we refer to “Leads,” “Customer Representatives”
          and “Website Visitors”, as follows: (1) if you are a Lead, you are an
          individual about whom we process Personal Data in connection with the
          Lead Generation Services (for example, individuals who interact with
          content that we send in emails on behalf of our Customers or content
          available on our websites); (2) if you are a Customer Representative,
          you are an employee, contractor or other individual authorized by a
          Customer to use our Services and we provide you with Personal Data
          about the Leads; (3) if you are a Website Visitor, you are an
          individual who visits our website and you do not fall under the Lead
          or Customer Representative categories. If you are a Lead, we process
          the following types of Personal Data about you: 1. biographical
          information, such as first and last name and date of birth; and
          contact information, such as email address, phone number, postal
          address, and country of residence postal; 2. employment information,
          such as industry, job title, company name, seniority within company,
          department name, or company size; 3. business contact information,
          such as company email address and postal address; and public LinkedIn
          profile; 4. analytics information, including the type of content that
          you engage with when using the Services, or after clicking a link in
          an outreach email; 5. device, internet and mobile information such as
          the hardware model, operating system version, unique device
          identifiers, browser type, language, IP address, wireless network, and
          mobile network information (including the mobile phone number); 6.
          geo-location information when you use the Services; and/or 7. records
          and copies of your correspondence (including e-mail addresses), if you
          contact us. This may include call recordings where we monitor and
          record such calls for staff training or quality assurance purposes.
        </p>
        <p>
          If you are a Customer Representative, we process the following types
          of Personal Data about you: 1. business contact information such as
          first and last name, email address, phone number, postal address; 2.
          billing and payment information, including the address for billing,
          billing contact information and credit card information; 3. device,
          internet and mobile information such as the hardware model, operating
          system version, unique device identifiers, browser type, language, IP
          address, wireless network, and mobile network information (including
          the mobile phone number); 4. geo-location information when you use the
          Services; and/or records and copies of your correspondence (including
          e-mail addresses), if you contact us. This may include call recordings
          where we monitor and record such calls for staff training or quality
          assurance purposes.
        </p>
        <p>
          If you are a Website Visitor, we process the following types of
          Personal Data about you: 1. contact information such as first and last
          name, email address and phone number; 2. device, internet and mobile
          information such as the hardware model, operating system version,
          unique device identifiers, browser type, language, IP address,
          wireless network, and mobile network information (including the mobile
          phone number);
        </p>
        <h4>How We Receive Personal Data</h4>
        <p>
          If you are a Lead, we receive your Personal Data when: 1. you provide
          it directly to us through our Services, or by clicking a link in a
          Contentree outreach email; 2. our Customers (including Customer
          Representatives) provide it to us;
        </p>
        <h4>Purposes of Processing</h4>
        <p>
          If you are a Lead, we process your Personal Data to: 1. respond to
          your requests or questions; 2. provide you with access to the Services
          and the content therein, including content that we send you on behalf
          of our Customers;
        </p>
        <h4>Basis of Processing</h4>
        <p>
          We process your Personal Data on the basis of: 1. your consent (you
          may withdraw your consent at any time by contacting us via the
          information in the “Contact Us” section below. This will not affect
          the lawfulness of our processing before you withdrew your consent. It
          will also not affect processing performed on other lawful grounds); 2.
          if you are outside Canada, our legitimate interests in providing
          effective Services to our Customers and maintaining our business
          relationship;
        </p>
        <h4>DATA PRIVACY FRAMEWORK</h4>
        <p>
          Contentree complies with the EU-U.S. Data Privacy Framework (EU-U.S.
          DPF) and the Swiss-U.S. Data Privacy Framework (Swiss-U.S. DPF) as set
          forth by the U.S. Department of Commerce. Contentree has certified to
          the U.S. Department of Commerce that it adheres to the EU-U.S. Data
          Privacy Framework Principles (EU-U.S. DPF Principles) with regard to
          the processing of personal data received from the European Union in
          reliance on the EU-U.S. DPF. Contentree has certified to the U.S.
          Department of Commerce that it adheres to the Swiss-U.S. Data Privacy
          Framework Principles (Swiss-U.S. DPF Principles) with regard to the
          processing of personal data received from Switzerland. If there is any
          conflict between the terms in this privacy policy and the EU-U.S. DPF
          Principles and/or the Swiss-U.S. DPF Principles, the Principles shall
          govern. To learn more about the Data Privacy Framework (DPF) program,
          and to view our certification, please visit Contentree is responsible
          for the processing of personal data it receives, under the DPF, and
          subsequently transfers to a third party acting as an agent on its
          behalf. Contentree complies with the DPF Principles for all onward
          transfers of personal data from the EU and Switzerland, including the
          onward transfer liability provisions.
        </p>
      </div>
      <div>
        <Foot />
        <Footer />
      </div>
    </>
  );
}

export default PrivacyPolicy;
