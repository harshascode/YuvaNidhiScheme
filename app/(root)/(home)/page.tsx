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
    <main className="flex-center paddings sm:paddings-sm mx-auto w-full max-w-screen-2xl flex-col">
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
                not started
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border border-black border-solid text-lg font-medium">
                Website
              </TableCell>
              <TableCell className="border border-black border-solid text-lg font-medium text-blue-800 underline underline-offset-2">
                SevaSindu portal
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
          <a href="http:https://sevasindhugs.karnataka.gov.in/" target="_blank">
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
      </div>

      <div className="flex-center relative min-h-[60px] mt-8 mb-8 w-full flex-col rounded-md bg-cover bg-center text-center bg-black">
        <h2 className="sm:heading1 heading2 text-center text-white mt-1 mb-1">
          Eligibility of Karnataka Yuva Nidhi Scheme
        </h2>
      </div>

      <div className="bg-[#F5F7F8]">
        <ul className="p-3 list-disc sm:text-xl">
          <li>Aadhaar card</li>
          <li>Bank account details</li>
          <li>Residence Proof/ Domicile of Karnataka.</li>
          <li>Income certificate</li>
          <li>Educational qualification documents</li>
          <li>Mobile Number.</li>
        </ul>
      </div>

      <div className="flex-center relative min-h-[60px] w-full flex-col rounded-md bg-cover bg-center text-center bg-black">
        <h2 className="sm:heading1 heading2 text-center text-white mt-1 mb-1">
          How to Apply for the Yuva Nidhi Scheme Online
        </h2>
      </div>

      <div className="mt-6 mb-6 p-2 bg-[#F5F7F8]">
        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>1. Eligibility Check: </strong> Educated but unemployed youth
          residing in Karnataka can access unemployment benefits by completing
          the Online Application Form for the Yuva Nidhi Scheme.
        </p>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>2. Access the Form:</strong> The Online Application Form for
          the Karnataka Nidhi Scheme is accessible through the Seva Sindhu
          Portal, administered by the Government of Karnataka.
        </p>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>3. Registration:</strong> Unemployed youth must begin by
          registering themselves on the portal.
        </p>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>4. Aadhar Card Requirement: </strong>It’s crucial to have an
          Aadhar Card for Unemployment Allowance Registration.
        </p>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>5. Login:</strong> Once registered, log in to the portal using
          your credentials.
        </p>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>6. Step-by-Step Details:</strong> Fill in the necessary
          information step by step, which includes:
        </p>

        <div className="ml-12 text-[14px] sm:text-xl">
          <ul className="list-disc">
            <li>Personal Details</li>
            <li>Contact Details</li>
            <li>Educational Qualification Details</li>
            <li>Bank Account Details</li>
          </ul>
        </div>

        <p
          className="text-black paragraph-regular 
       text-[18px] sm:text-xl leading-normal sm:leading-10 mt-7 mb-7"
        >
          <strong>7. Aadhaar-Bank Account Linkage:</strong> To avail of this
          scheme, applicants must ensure that their Aadhaar is linked to their
          bank account.
        </p>
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
        <p className="mb-10">
        18 ರಿಂದ 35 ವರ್ಷದೊಳಗಿನವರಾಗಿರಬೇಕು.
        </p>

        <p className="mt-5 mb-2 font-semibold">ಯುವ ನಿಧಿ ಯೋಜನೆ ಕರ್ನಾಟಕ ಪ್ರಯೋಜನಗಳು</p>
        <p className="mb-10">
        ನಿರುದ್ಯೋಗಿ ಪದವೀಧರರಿಗೆ ತಿಂಗಳಿಗೆ 3,000 ರೂ., ನಿರುದ್ಯೋಗಿ ಡಿಪ್ಲೊಮಾ ಹೊಂದಿರುವವರಿಗೆ 1,500 ರೂ.
        </p>
      </div>
    </main>
  );
};

export default page;
