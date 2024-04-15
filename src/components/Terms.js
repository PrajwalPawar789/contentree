import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Foot from "./Foot";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({}));

function Terms() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.solutionsContainer}>
        <h1 className={classes.title} style={{ color: "black" }}>
          Terms Of Use <br />
        </h1>

        <p>
          Contentree LLC (hereinafter, "Contentree") provides this service free
          of charge to you under the terms and conditions primarily set forth in
          this Legal section of the Web site (www.contentree .com). However,
          there may be additional terms and conditions in other sections of this
          Web site, which are expressly incorporated herein and also must be
          observed and followed (collectively referred to hereinafter as "Terms
          of Use"). BY ACCESSING OR USING THIS WEB SITE, YOU AGREE TO ABIDE BY
          THE TERMS OF USE.
        </p>
        <p>
          Subject to the Terms of Use, Contentree grants you a non-exclusive,
          non-transferable, limited, conditionally revocable right to access,
          use and privately display this Web site for the purpose of identifying
          technologies, software, equipment, materials & services for your
          legitimate personal and/or business needs. Any other use of this Web
          site is expressly prohibited and constitutes a material violation of
          the Terms of Use. Prohibited uses include, without limitation, using
          email addresses obtained from this Web site for solicitation purposes
          of any kind, directly or indirectly, the use of data mining, robots or
          other similar data gathering and extraction tools, and making any
          derivative works based on this Web site.
        </p>
        <p>
          You must be 18 years or older to use this Web site. Contentree
          reserves the right, at its sole discretion, to change, modify, add or
          remove the Terms of Use, in whole or in part, at any time without
          prior notice or liability. Your continued access or use of this site
          after any such change, modification, addition or removal of the Terms
          of Use will constitute your acceptance thereof. Further, Contentree
          reserves the right, at its sole discretion, and without prior notice
          or liability, to terminate, modify or add any features to this Web
          site at any time.
        </p>
        <h4>LIMITING ACCESS</h4>
        <p>
          Contentree reserves the right, as its sole discretion, and without
          prior notice or liability, to limit or terminate your access to this
          Web site and you agree to abide by such limit or termination.
        </p>

        <h4>USE RESTRICTIONS</h4>

        <p>
          You agree not to modify, add or delete any content on this site,
          without the express written permission of Contentree . Further, you
          agree not to interrupt or attempt to interrupt the operation of this
          Web site or access thereto by other users. You agree not to resell or
          otherwise exploit for commercial purposes, directly or indirectly,
          this Web site or access to this Web site.
        </p>

        <h4>LINKING TO THIS WEB SITE</h4>
        <p>
          You may link to this Web site, so long as it does not portray
          Contentree in a negative manner or otherwise portray its services in a
          false, misleading, derogatory or offensive manner. Further, the
          linking site must not contain anything illegal, false, misleading,
          derogatory or offensive, and no express or implied affiliation with
          Contentree may be indicated without Contentree 's express written
          permission. Contentree reserves the right to require that you remove
          any link to this Web site for any reason, and you agree to carry out
          the removal immediately. Unless specifically set forth in writing by
          Contentree , any link to this Web site must not appear prominently on
          the linking site so as to confuse or mislead users as to the
          affiliation, sponsorship, etc. of Contentree and the linking site.
        </p>
        <h4>RIGHTS, LIMITS, OWNERSHIP & INTELLECTUAL PROPERTY</h4>
        <p>
          Case studies displayed on Contentree are the property of the original
          creators. Contentree is only providing a service that helps the owners
          further disseminate the content within the case studies to potential
          customers. Case studies are a well established & recognized marketing
          tool used by Business to Business (B2B) vendors and already in the
          public domain. Contentree is a platform focused on helping vendors
          further amplify their value proposition to the marketplace. Contentree
          makes no claim to the ownership of the case studies and our only goal
          is to increase the readership of these documents and in doing so help
          vendors obtain increased value from their marketing materials.
        </p>
        <h4>1 COLLECTING INFORMATION ON THE WEBSITE</h4>
        <p>
          When you register for a myContentree account, create a business
          profile &/or claim a Vendor Solution Center on the Website, we collect
          the following master data: Your business email, company name, your job
          functional area, username, password and your industry. The purpose of
          the collection of this information is to identify you as a customer
          when you log on to the Website. If you are a customer of Contentree ,
          we also collect information relevant to the fulfillment of the
          agreement between you and us.
        </p>
        <h4>2 DISCLOSURE OF PERSONAL & BUSINESS DATA</h4>
        <p>2.1 Disclosure of data on the Website</p>
        <p>
          The company information you insert when signing up or when updating
          your Vendor Solution Center will be available for other users of the
          Website.
        </p>
      </div>
      <div>
        <Foot />
        <Footer />
      </div>
    </>
  );
}

export default Terms;
