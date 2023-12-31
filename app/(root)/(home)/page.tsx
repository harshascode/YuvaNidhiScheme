import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "lucide-react";

const page = () => {
  return (
    <main className="flex-center paddings sm:paddings-sm mx-auto w-full max-w-screen-xl flex-col">
      <section className="pt-[10px] sm:pt-[1px] w-full">
        <div className="flex-center relative min-h-[60px] w-full flex-col rounded-md bg-cover bg-center text-center bg-black">
          <h1 className="sm:heading1 heading2 text-center text-white mt-1 mb-1">
            Yuva Nidhi Yojane Karnataka
          </h1>
        </div>
      </section>
      <div className="mt-6 mb-6 p-2 bg-[#F5F7F8]">
        <p
          className="text-black paragraph-regular 
       text-sm sm:text-xl leading-normal sm:leading-10"
        >
          The Karnataka Yuva Nidhi Scheme is a promise of the Congress Party.
          Under this scheme, the government will provide financial aid to the
          educated, unemployed youth in the state
        </p>
      </div>

      <div className="w-full bg-[#F5F7F8]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="border border-black border-solid text-lg font-medium">
                Scheme Name
              </TableHead>
              <TableHead className="border border-black border-solid text-lg font-medium">
                Yuva Nidhi Scheme
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border border-black border-solid text-lg font-medium">
                State
              </TableCell>
              <TableCell className="border border-black border-solid text-lg font-medium">
                Karnataka
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border border-black border-solid text-lg font-medium">
                Beneficiaries
              </TableCell>
              <TableCell className="border border-black border-solid text-lg font-medium">
                Graduates and Diploma Students
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border border-black border-solid text-lg font-medium">
                Objective
              </TableCell>
              <TableCell className="border border-black border-solid text-lg font-medium">
                To provide financial support to unemployed Graduates and Diploma
                Pass outs.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border border-black border-solid text-lg font-medium">
                Starting Date
              </TableCell>
              <TableCell className="border border-black border-solid text-lg font-medium">
                26-Dec-2023
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border border-black border-solid text-lg font-medium">
                Website
              </TableCell>
              <TableCell className="border border-black border-solid text-lg font-medium text-blue-800 underline underline-offset-2 ">
                <a
                  href="https://sevasindhuservices.karnataka.gov.in/"
                  target="_blank"
                >
                  SevaSindu portal
                </a>
                {/* SevaSindu portal */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="m-10">
        <img src="/yuva-nidhi-scheme-4.webp" alt="logo" width="300px" />
      </div>

      <div className="place-items-center">
        <h2 className="text-[40px] font-semibold text-center text-blue-950">
          Yuva Nidhi Scheme SevaSindus Portal
        </h2>
      </div>

      <div>
        <div className="m-10 place-items-center">
          <a
            href="https://sevasindhuservices.karnataka.gov.in/"
            target="_blank"
          >
            <img src="/clck-img.webp" alt="logo" width="300px" />
          </a>
        </div>
      </div>

      <div className="flex-center relative min-h-[60px] w-full flex-col rounded-md bg-cover bg-center text-center bg-black">
        <h2 className="sm:heading1 heading2 text-center text-white mt-1 mb-1">
          Yuva Nidhi Scheme Assistance Amount
        </h2>
      </div>

      <div className="mt-6 mb-6 p-2 bg-[#F5F7F8]">
        <p
          className="text-black paragraph-regular 
       text-sm sm:text-xl leading-normal sm:leading-10"
        >
          Under the Yuva Nidhi Scheme, the Karnataka government is committed to
          extending financial support to the youth of the state. Those who have
          successfully completed their degree or diploma courses during the
          academic year 2022-23 are eligible to benefit from this initiative.
          Under this program, eligible unemployed youth will receive financial
          assistance.
        </p>
      </div>

      {/* Ad will place here */}
      <div>
        <div className="m-2 mb-10 place-items-center">
          <a
            href="https://amzn.to/3Hm7CYZ"
            target="_blank"
          >
            <img src="/amazon-ad1.webp" alt="ad" width="600px" />
          </a>
        </div>
      </div>

      <div className="w-full bg-[#F5F7F8]">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="border border-black border-solid text-lg font-medium">
                Unemployed graduates
              </TableCell>
              <TableCell className="border border-black border-solid text-lg font-medium">
                Rs.3,000 per month
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border border-black border-solid text-lg font-medium">
                Diploma pass-outs
              </TableCell>
              <TableCell className="border border-black border-solid text-lg font-medium">
                Rs.1,500 per month
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="flex-center relative min-h-[60px] mt-14 w-full flex-col rounded-md bg-cover bg-center text-center bg-black">
        <h2 className="sm:heading1 heading2 text-center text-white mt-1 mb-1">
          Eligibility of Karnataka Yuva Nidhi Scheme
        </h2>
      </div>

      <div className="mt-6 mb-6 p-2 bg-[#F5F7F8]">
        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>Residency Requirement:</strong> Applicants must be residents
          of Karnataka.
        </p>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>Academic Year:</strong> Applicants should have successfully
          completed their degree or diploma during the academic year 2022-2023.
        </p>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>Unemployment Period:</strong> Eligibility extends to
          individuals who remain unemployed for at least six months after
          completing their degrees or diplomas.
        </p>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>Exclusion from Similar Schemes:</strong> Those already
          receiving benefits from comparable schemes or programs are not
          eligible for this scheme.
        </p>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>Exemption from Certain Employment Types:</strong> Individuals
          enrolled in higher education, receiving apprentice salaries, or
          employed in either the private or government sectors are ineligible.
        </p>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>Exclusion of Self-Employed Individuals with Loans:</strong>{" "}
          Self-employed individuals who have obtained loans through state,
          central schemes, or banks are not eligible.
        </p>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>Aadhaar-Bank Account Linkage:</strong> To avail of this
          scheme, applicants must ensure that their Aadhaar is linked to their
          bank account.
        </p>

        <div className="italic underline underline-offset-1 text-blue-800 cursor-pointer font-semibold">
          <a href="/how-to-apply-yuva-nidhi-scheme-karnataka" target="_blank">
            step by step guide to-apply-yuva-nidhi-scheme-karnataka
          </a>
        </div>
      </div>

      <div className="flex-center relative min-h-[60px] mt-8 mb-8 w-full flex-col rounded-md bg-cover bg-center text-center bg-black">
        <h2 className="sm:heading1 heading2 text-center text-white mt-1 mb-1">
          Eligibility of Karnataka Yuva Nidhi Scheme
        </h2>
      </div>

      <div className="bg-[#F5F7F8]">
        <ul className="p-3 list-disc sm:text-xl">
          <li>Aadhaar card</li>
          <li>Residence Proof/ Domicile of Karnataka.</li>
          <li>Educational qualification from NAD Database</li>
          <li>Mobile Number.</li>
        </ul>
      </div>

      <div className="flex-center relative min-h-[60px] mt-8 mb-8 w-full flex-col rounded-md bg-cover bg-center text-center bg-black">
        <h2 className="sm:heading1 heading2 text-center text-white mt-1 mb-1">
          How to Apply for the Yuva Nidhi Scheme Online
        </h2>
      </div>

      <div className="mt-2 mb-6 p-2 bg-[#F5F7F8]">
        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-5 mb-5"
        >
          <strong>1. Visit the Official Online portel: </strong>
          <span className="text-blue-600 cursor-pointer underline-offset-2">
            <a
              href="https://sevasindhuservices.karnataka.gov.in"
              target="_blank"
            >
              sevasindhuservices.karnataka.gov.in
            </a>
          </span>
        </p>

        <div className="m-10">
          <img
            src="/yuva-nidhi-scheme-1.webp"
            alt="logo"
            width="600px"
            className="block m-auto border border-spacing-2 border-stone-950"
          />
        </div>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>2. Login or Create your account:</strong> Login to your
          account with your mobile no. if you don't have an account just create
          a new account.
        </p>

        <div className="m-10">
          <img
            src="/yuva-nidhi-scheme-2.webp"
            alt="logo"
            width="600px"
            className="block m-auto border border-spacing-2 border-stone-950"
          />
        </div>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>3. After Login using mobile no and password:</strong> you can
          see this page. now click on View all available services option on this
          page.
        </p>

        <div className="m-10">
          <img
            src="/yuva-nidhi-scheme-3.webp"
            alt="logo"
            width="600px"
            className="block m-auto border border-spacing-2 border-stone-950"
          />
        </div>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>4. Search the Yuva Nidhi Scheme: </strong>in search box type
          yuva nidhi to find the application link.
        </p>

        <div className="m-10">
          <img
            src="/yuva-nidhi-scheme-46.webp"
            alt="logo"
            width="600px"
            className="block m-auto border border-spacing-2 border-stone-950"
          />
        </div>
        <div className="m-10">
          <img
            src="/yuva-nidhi-scheme-45.webp"
            alt="logo"
            width="600px"
            className="block m-auto border border-spacing-2 border-stone-950"
          />
        </div>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>5. The application process starts from here: </strong> Now you
          need to Declare that all content is true.
        </p>

        <div className="m-10">
          <img
            src="/yuvanidhi-11.webp"
            alt="logo"
            width="600px"
            className="block m-auto border border-spacing-2 border-stone-950"
          />
        </div>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>6. Aadhaar Verification:</strong> Before filling out the
          application you need to verify your Aadhaar by e-KYC Service.
        </p>

        <div className="m-10">
          <img
            src="/yuvanidhi-12.webp"
            alt="logo"
            width="600px"
            className="block m-auto border border-spacing-2 border-stone-950"
          />
        </div>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>7. Fill the Details:</strong> Your name, photo, date of birth,
          and address will be automatically filled. Please ensure that the
          information is correct and fill in any other details that are not
          automatically populated.
        </p>

        <div className="m-10">
          <img
            src="/yuvanidhi-13.webp"
            alt="logo"
            width="600px"
            className="block m-auto border border-spacing-2 border-stone-950"
          />
        </div>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>8. Fill your Education Details:</strong> select your course,
          sslc or puc, Board Name and certificate Registertion number.
        </p>

        <div className="m-10">
          <img
            src="/yuvanidhi-14.webp"
            alt="logo"
            width="600px"
            className="block m-auto border border-spacing-2 border-stone-950"
          />
        </div>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>9. Applicant communication details:</strong> Enter your Mobile
          number and fill the Additional Details and Submit your application.
        </p>

        <div className="m-10">
          <img
            src="/yuvanidhi-15.webp"
            alt="logo"
            width="600px"
            className="block m-auto border border-spacing-2 border-stone-950"
          />
        </div>
      </div>

      {/* Ad will place here */}
      <div>
        <div className="m-2 mb-10 place-items-center">
          <a
            href="https://bit.ly/upstoxx500"
            target="_blank"
          >
            <img src="/amazon-ad2.webp" alt="ad" width="600px" />
          </a>
        </div>
      </div>

      <div className="flex-center relative min-h-[60px] mt-14 mb-8 w-full flex-col rounded-md bg-cover bg-center text-center bg-black">
        <h2 className="sm:heading1 heading2 text-center text-white mt-1 mb-1">
          Eligibility of Karnataka Yuva Nidhi Scheme
        </h2>
      </div>

      <div className="w-full bg-[#F5F7F8]">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="border border-black border-solid text-lg font-medium">
                Sava Sindu Official Website
              </TableCell>
              <TableCell className="border border-black border-solid text-lg font-medium">
                SevaSindu
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border border-black border-solid text-lg font-medium">
                Status Check
              </TableCell>
              <TableCell className="border border-black border-solid text-lg font-medium">
                YuvaNidhiScheme.info
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mt-10 mb-10">
        <h2 className="text-[30px] font-semibold">FAQ's</h2>
        <p className="mt-5 mb-2 font-semibold">ಯುವ ನಿಧಿ ಯೋಜನೆಗೆ ಯಾರು ಅರ್ಹರು?</p>
        <p className="mb-10">
          ಕರ್ನಾಟಕದಲ್ಲಿ ಯುವ ನಿಧಿ ಯೋಜನೆಗೆ ಅರ್ಹರು 2022-2023 ರ ಶೈಕ್ಷಣಿಕ ವರ್ಷದಲ್ಲಿ
          ಪದವಿ ಅಥವಾ ಡಿಪ್ಲೊಮಾವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ ಮತ್ತು ಕನಿಷ್ಠ ಆರು ತಿಂಗಳು
          ನಿರುದ್ಯೋಗಿಗಳಾಗಿ ಉಳಿದವರು ಸೇರಿದ್ದಾರೆ.
        </p>

        <p className="mt-5 mb-2 font-semibold">ಯುವನಿಧಿಗೆ ವಯಸ್ಸಿನ ಮಿತಿ ಏನು?</p>
        <p className="mb-10">18 ರಿಂದ 35 ವರ್ಷದೊಳಗಿನವರಾಗಿರಬೇಕು.</p>

        <p className="mt-5 mb-2 font-semibold">
          ಯುವ ನಿಧಿ ಯೋಜನೆ ಕರ್ನಾಟಕ ಪ್ರಯೋಜನಗಳು
        </p>
        <p className="mb-10">
          ನಿರುದ್ಯೋಗಿ ಪದವೀಧರರಿಗೆ ತಿಂಗಳಿಗೆ 3,000 ರೂ., ನಿರುದ್ಯೋಗಿ ಡಿಪ್ಲೊಮಾ
          ಹೊಂದಿರುವವರಿಗೆ 1,500 ರೂ.
        </p>
      </div>
    </main>
  );
};

export default page;
