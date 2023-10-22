import Link from "next/link";
import Image from "next/image";


const page = () => {
  return (
    <main className="paddings sm:paddings-sm mx-auto w-full max-w-screen-xl">
      <h1 className="text-[30px] my-8 bg-[#F5F7F8] rounded-sm">
        [2023] How to apply Yuva Nidhi Scheme Karnataka
      </h1>
      
      <div className="">
      <Link href="/">
          <Image className="border border-black border-spacing-2"
            src="/yuva-nidhi-scheme-image.webp"
            width={700}
            height={400}
            alt="YuvaNidhiScheme"
          />
        </Link>
      </div>

      <div className="my-12 p-2 bg-[#F5F7F8] rounded-sm">
        <h2 className="text-[18px] my-4 font-semibold">
          What is the Yuva Nidhi scheme?
        </h2>
        <p>
          Yuva Nidhi scheme was launched by the Karnataka government to provide
          financial assistance to graduates and diploma unemployed students.
        </p>
      </div>

      <div className="my-12 p-2 bg-[#F5F7F8] rounded-sm">
        <h2 className="text-[18px] my-4 font-semibold">
          Who is eligible for Yuva Nidhi?
        </h2>
        <p>
          Graduates and diploma holders who are currently unemployed can apply
          for the Yuva Nidhi Scheme.
        </p>
      </div>

      <div className="my-12 p-2 bg-[#F5F7F8] rounded-sm">
        <h2 className="text-[18px] my-4 font-semibold">
          What is the government 3000 scheme for students?
        </h2>
        <p>
          It’s the Karnataka government Yuva Nidhi Scheme which provides Rs.
          3000 for Unemployed Graduates.
        </p>
      </div>

      <div className="my-12 p-2 bg-[#F5F7F8] rounded-sm">
        <h2 className="text-[18px] my-4 font-semibold">
          Which state launched the Yuva Nidhi scheme?
        </h2>
        <p>
          The Karnataka government launched the Yuva Nidhi scheme for Students.
        </p>
      </div>

      <div className="my-12 p-2 bg-[#F5F7F8] rounded-sm">
        <h2 className="text-[18px] my-4 font-semibold">
          What are the Eligibility criteria for applying Yuva Nidhi shame?
        </h2>
        <ul className="list-disc ml-8">
          <li>Applicant Must be Residence of Karnataka.</li>
          <li>Applicant must be passed in 2022 to 2023.</li>
          <li>Applicant must be Unemployed for 6 Months.</li>
        </ul>
      </div>

      <div className="my-12 p-2 bg-[#F5F7F8] rounded-sm">
        <h2 className="text-[18px] my-4 font-semibold">Required Documents:</h2>
        <ul className="list-disc ml-8">
          <li>Aadhar card</li>
          <li>Marks card</li>
          <li>Income Certificate.</li>
          <li>Bank Passbook</li>
        </ul>
      </div>

      <div className="my-12 p-2 bg-[#F5F7F8] rounded-sm">
        <h2 className="text-[18px] my-4 font-semibold">
          How to apply Yuva Nidhi Scheme Karnataka
        </h2>
        <p>
          <strong>Step 1:</strong> Log in to the SeveSindu portal.
        </p>
        <p>
          <strong>Step 2:</strong> Click on the Nidhi Scheme.
        </p>
        <p>
          <strong>Step 3:</strong> Fill in the required information in the form.
        </p>
        <p>
          <strong>Step 4:</strong> Preview the entered information and click
          next.
        </p>
        <p>
          <strong>Step 5:</strong> Upload the Aadhar card, Mark’s card and
          photo.
        </p>
        <p>
          <strong>Step 6:</strong> Agree the terms and submit the application.
        </p>
        <p>
          <strong>Step 7:</strong> Wait for the process and check your status.
        </p>
      </div>
    </main>
  );
};

export default page;
