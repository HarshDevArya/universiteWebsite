/* eslint-disable react/prop-types */
import "./DistanceAdmission.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageHeaderNTitle from "./pageHeaderTitle";
import { useEffect, useState } from "react";
import coursedata from "../database.json";
import regionalData from "../regionalCenter.json";
import studyCenterData from "../studycenter.json";
import educationBoards from "../educatinBoard.json";
export default function DistanceAdmission() {
  const { IGNOU_Courses: courses } = coursedata;
  const { IGNOU_Regional_Centers: regionalCenters } = regionalData;
  const { IGNOU_Study_Centers: studyCenter } = studyCenterData;
  const { Education_Boards: educationBoard } = educationBoards;
  console.log(courses);
  console.log(regionalCenters);
  console.log(studyCenter);
  console.log(educationBoard);
  // const degrees = degreeData;
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedStudyCenter, setselectedStudyCenter] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [startDate, setStartDate] = useState("");
  const [medium, setMedium] = useState("");
  const [selectingRegion, setSelectingRegion] = useState("");
  const [selectedCategory, setSelectingCategory] = useState("");
  const [selectedReligion, setSelectedReligion] = useState("");
  const [selectedDisability, setSelectedDisability] = useState("");
  const [selectedDisabilityCategory, setSelectedDisabilityCategory] =
    useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [aadharError, setAadharError] = useState("");
  const [employementStatus, setEmployementStatus] = useState("");
  const [selectedgender, setSelectedgender] = useState("");
  const [selectingyear, setSelectingyear] = useState("");
  const [yearError, setYearError] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedStream, setSelectedStream] = useState("");
  const [obtainedPersentage, setObtainedPercentage] = useState("");
  const [persentageError, setPercentageError] = useState("");
  const [selectingGraduationyear, SetSelectingGraduationyear] = useState("");
  const [SelectingGraduationyearError, SetSelectingGraduationyearError] =
    useState("");
  useEffect(() => {
    setDisplayName("Application");
    return () => {
      setDisplayName();
    };
  }, []);

  // handling Submition Form
  function handleAdmistionForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("submited");
    const data = {
      fName: formData.get("First-Name"),
      password: formData.get("password"),
      programType: selectedProgram,
      degree: selectedCourse,
      medium: medium,
      region: selectingRegion,
      studycenter: selectedStudyCenter,
      fatherName: formData.get("Father"),
      motherName: formData.get("Mother"),
      phNumber: phoneNumber,
      email: formData.get("email"),
      address: formData.get("address"),
      dob: startDate,
      religion: selectedReligion,
      OtherReligionName: formData.get("OtherReligionName"),
      category: selectedCategory,
      gender: selectedgender,
      aadharNo: aadharNumber,
      disability: selectedDisabilityCategory,
      employementStatus: employementStatus,
      schooleName: formData.get("School"),
      board: selectedBoard,
      schoolYearCompletion: selectingyear,
      stream: selectedStream,
      schoolInterpercentage: obtainedPersentage,
      intersubject: formData.get("Subjects"),
      DegreeDoneInGraduation: formData.get("DegreeDoneInGraduation"),
      GraduationYearCompleted: selectingGraduationyear,
      CGPA: formData.get("CGPA"),
    };
    console.log(data);
  }
  // handling phone number submiting
  // Validate and handle phone number input
  function handlePhoneNumberChange(event) {
    const { value } = event.target;
    // Allow the user to type up to 10 digits
    if (value.length <= 10 && /^[0-9]*$/.test(value)) {
      // Checks if the input is digits and not more than 10 digits
      setPhoneNumber(value);
      if (value.length !== 10) {
        setPhoneError("Phone number must be 10 digits long.");
      } else {
        setPhoneError(""); // Clear error message when 10 digits are entered
      }
    }
  }
  const handleDateChange = (e) => {
    setStartDate(e.target.value);
  };
  // handling program change
  const handleProgramChange = (event) => {
    setSelectedProgram(event.target.value);
  };

  function handleCourseChange(e) {
    setSelectedCourse(e.target.value);
  }
  function handleStudyCenterChange(e) {
    setselectedStudyCenter(e.target.value);
  }

  function handleMediumChange(e) {
    setMedium(e.target.value);
  }
  function handleRegionChange(e) {
    setSelectingRegion(e.target.value);
  }
  function handleCategoryChange(e) {
    setSelectingCategory(e.target.value);
  }
  function handleReligionChange(e) {
    setSelectedReligion(e.target.value);
  }
  function handleDisabilityChange(e) {
    setSelectedDisability(e.target.value);
  }
  function handleDisabilityCategoryChange(e) {
    setSelectedDisabilityCategory(e.target.value);
  }
  function handleBoardChange(e) {
    setSelectedBoard(e.target.value);
  }
  function handleselectedStream(e) {
    setSelectedStream(e.target.value);
  }
  // handling Addhar Card
  function handlingaadharNumber(e) {
    const { value } = e.target;
    // Allow the user to type up to 12 digits
    if (value.length <= 12 && /^[0-9]*$/.test(value)) {
      // Checks if the input is digits and not more than 12 digits
      setAadharNumber(value);
      if (value.length !== 12) {
        setAadharError("Enter Valid Aadhar Number");
      } else {
        setAadharError(""); // Clear error message when 12 digits are entered
      }
    }
  }

  function handleEmployementStatus(e) {
    setEmployementStatus(e.target.value);
  }

  function handlegenderChange(e) {
    setSelectedgender(e.target.value);
  }
  function handleSelectingYear(e) {
    const year = e.target.value;
    if (year.length <= 4 && /^\d{0,4}$/.test(year)) {
      setSelectingyear(year);
      if (year.length !== 4) {
        setYearError("Enter Valid Year");
      } else {
        setYearError(""); // Clear error message when 12 digits are entered
      }
    }
  }

  function handlesObtainedPercentage(e) {
    let percentage = e.target.value;

    // Remove any non-numeric characters
    percentage = percentage.replace(/[^0-9.]/g, "");

    // Ensure the value is a number and not greater than 100
    if (!isNaN(percentage) && percentage <= 100) {
      setObtainedPercentage(percentage);
      setPercentageError("");
    } else {
      // Handle the invalid input case
      setPercentageError(
        "Invalid input. Please enter a number between 0 and 100."
      );
    }
  }
  function handleSelectingGraduationYear(e) {
    const year = e.target.value;
    if (year.length <= 4 && /^\d{0,4}$/.test(year)) {
      SetSelectingGraduationyear(year);
      if (year.length !== 4) {
        SetSelectingGraduationyearError("Enter Valid Year");
      } else {
        SetSelectingGraduationyearError(""); // Clear error message when 12 digits are entered
      }
    }
  }
  // courses.map((course) =>
  //   console.log(course.program_code, course.program_name)
  // );

  return (
    <>
      <PageHeaderNTitle displayName={displayName} />
      <section className="candidates-resume-area ptb-100">
        <div className="container">
          <div className="candidates-resume-content">
            <form className="resume-info" onSubmit={handleAdmistionForm}>
              <h3>Student basic information</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Student&apos;s Full Name*</label>
                    <input
                      className="form-control"
                      type="text"
                      name="First-Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Password*</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Programme Type*</label>
                    <select
                      className="form-control"
                      value={selectedProgram}
                      onChange={handleProgramChange}
                      required
                    >
                      <option value="0">Select</option>
                      <option value="Undergraduate">Graduation</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Certificate">Certificate</option>
                      <option value="Post Graduate Diploma">
                        Postgraduation Diploma
                      </option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Select Programme For Enrollment*</label>
                    <select
                      className="form-control"
                      value={selectedCourse}
                      onChange={handleCourseChange}
                      required
                    >
                      <option value="0">Select</option>
                      {courses
                        .filter(
                          (course) => course.degree_type === selectedProgram
                        )
                        .map((course) => (
                          <option
                            value={course.program_code}
                            key={course.program_code}
                          >
                            {course.program_code}: {course.program_name}
                          </option>
                        ))}
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Regional Code for Admission*</label>
                    <select
                      className="form-control"
                      value={selectingRegion}
                      onChange={handleRegionChange}
                      required
                    >
                      <option value="0">Select</option>
                      {regionalCenters.map((region) => (
                        <option value={region.code} key={region.code}>
                          {region.code}: {region.place}
                        </option>
                      ))}
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Program Study Center*</label>
                    <select
                      className="form-control"
                      value={selectedStudyCenter}
                      onChange={handleStudyCenterChange}
                      required
                    >
                      <option value="0">Select</option>
                      {studyCenter
                        .filter((center) =>
                          center.courses.includes(selectedCourse)
                        )
                        .map((center) => (
                          <option key={center.code} value={center.code}>
                            {center.name}
                          </option>
                        ))}
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Medium*</label>
                    <select
                      className="form-control"
                      value={medium}
                      onChange={handleMediumChange}
                      required
                    >
                      <option value="0">Select</option>
                      <option value="eng">English</option>
                      <option value="hindi">Hindi</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
              </div>
              <h3>Student personal information</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Father&apos;s name*</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Father"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Mother&apos;s name*</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Mother"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Contact no*</label>
                    <input
                      type="text"
                      className={`${
                        phoneError ? "form-control-err" : "form-control"
                      }`}
                      name="contact"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      required
                    />
                  </div>
                  {phoneError && (
                    <div style={{ color: "red" }}>{phoneError}</div>
                  )}
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>E-mail*</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Present address*</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Date Of Birth*</label>
                    <div className="input-group date" id="datetimepicker">
                      <input
                        type="date"
                        value={startDate}
                        className="form-control"
                        onChange={handleDateChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Religion*</label>
                    <select
                      className="form-control"
                      value={selectedReligion}
                      onChange={handleReligionChange}
                      required
                    >
                      <option value="0">Select</option>
                      <option value="hindu">Hindu</option>
                      <option value="mushlim">Muslim</option>
                      <option value="christian">Christian</option>
                      <option value="Sikh">Sikh</option>
                      <option value="Jain">Jain</option>
                      <option value="Buddhist">Buddhist</option>
                      <option value="Parsi">Parsi</option>
                      <option value="Jews">Jews</option>
                      <option value="Other">Other</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                {/* if Othere is selected */}
                {selectedReligion === "Other" && (
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Enter Religion Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="OtherReligionName"
                        required
                      />
                    </div>
                  </div>
                )}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Category*</label>
                    <select
                      className="form-control"
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      required
                    >
                      <option value="0">Select</option>
                      <option value="Unreserved">Unreserved</option>
                      <option value="OBCCreamy">OBC- Creamy Layer</option>
                      <option value="OBCNonCreamy">
                        OBC- Non-Creamy Layer
                      </option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Gender*</label>
                    <select
                      className="form-control"
                      value={selectedgender}
                      onChange={handlegenderChange}
                      required
                    >
                      <option value="0">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="transgender">Transgender</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Aadhar*</label>
                    <input
                      type="text"
                      className="form-control"
                      name="national"
                      value={aadharNumber}
                      onChange={handlingaadharNumber}
                      required
                    />
                    {aadharError && (
                      <div style={{ color: "red" }}>{aadharError}</div>
                    )}
                  </div>
                </div>
              </div>
              <h3>Student Other information</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Person With Disability applicable* </label>
                    <select
                      className="form-control"
                      value={selectedDisability}
                      onChange={handleDisabilityChange}
                      required
                    >
                      <option value="0">Select</option>
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                {selectedDisability === "yes" ? (
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>
                        Person With Disability applicable Category*{" "}
                      </label>
                      <select
                        className="form-control"
                        value={selectedDisabilityCategory}
                        onChange={handleDisabilityCategoryChange}
                        required
                      >
                        <option value="0">Select</option>
                        <option value="SHI">
                          Speach and Hearing Impariment
                        </option>
                        <option value="LI">Locomotor Impariment</option>
                        <option value="VI">Visual Impairment</option>
                        <option value="RD">Reading Disability</option>
                        <option value="AO">Any Other</option>
                      </select>
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {selectedDisabilityCategory === "AO" ? (
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Person With Disability applicable Other* </label>
                      <input
                        type="text"
                        name="OtherDisability"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Employement Status*</label>
                    <select
                      value={employementStatus}
                      onChange={handleEmployementStatus}
                      className="form-control"
                      required
                    >
                      <option value="0">Select Employement Status</option>
                      <option value="uemp">Unemployed</option>
                      <option value="ire">IGNOU Regular Employee</option>
                      <option value="Emp">Employed</option>
                      <option value="kvsp">KVS Employee</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
              </div>

              <h3 className="border-bottom pb-2">Academic information</h3>
              {selectedProgram === "Undergraduate" || selectedProgram === "" ? (
                <SchoolingDetails
                  selectingyear={selectingyear}
                  handleSelectingYear={handleSelectingYear}
                  yearError={yearError}
                  selectedBoard={selectedBoard}
                  handleBoardChange={handleBoardChange}
                  educationBoard={educationBoard}
                  selectedStream={selectedStream}
                  handleselectedStream={handleselectedStream}
                  obtainedPersentage={obtainedPersentage}
                  handlesObtainedPercentage={handlesObtainedPercentage}
                  persentageError={persentageError}
                />
              ) : selectedProgram === "Postgraduate" ? (
                <>
                  <SchoolingDetails
                    selectingyear={selectingyear}
                    handleSelectingYear={handleSelectingYear}
                    yearError={yearError}
                    selectedBoard={selectedBoard}
                    handleBoardChange={handleBoardChange}
                    educationBoard={educationBoard}
                    selectedStream={selectedStream}
                    handleselectedStream={handleselectedStream}
                    obtainedPersentage={obtainedPersentage}
                    handlesObtainedPercentage={handlesObtainedPercentage}
                    persentageError={persentageError}
                  />
                  <h4 className="h4 mb-4">Graduation Details</h4>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Graduation*</label>
                        <input
                          className="form-control"
                          type="text"
                          name="DegreeDoneInGraduation"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Year of completion*</label>
                        <div className="input-group date" id="datetimepicker-2">
                          <input
                            type="text"
                            name="GraduationYearCompleted"
                            className="form-control"
                            value={selectingGraduationyear}
                            onChange={handleSelectingGraduationYear}
                            required
                          />
                        </div>
                        {SelectingGraduationyearError && (
                          <div style={{ color: "red" }}>
                            {SelectingGraduationyearError}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>CGPA*</label>
                        <input
                          type="number"
                          className="form-control"
                          name="qualification"
                          min="0"
                          max="10"
                          step="0.01"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : selectedProgram === "Diploma" ? (
                <p>Diploma Coming Soon</p>
              ) : selectedProgram === "Certificate" ? (
                <p> Certificate Coming Soon</p>
              ) : selectedProgram === "Post Graduate Diploma" ? (
                <p>PostgraduationDiploma</p>
              ) : (
                "Please  choose Program Type"
              )}
              <h3>Upload</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="img-1">Student photo</label>
                    <input
                      type="file"
                      className="form-control"
                      id="img-1"
                      name="img"
                      accept="image/*"
                    />
                  </div>
                  <p>
                    Photo Must be in Passport (PP) Size. Max Upload Size 256KB
                  </p>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="img-2">Student Sign</label>
                    <input
                      type="file"
                      className="form-control"
                      id="img-2"
                      name="img"
                      accept="image/*"
                    />
                  </div>
                  <p>Max Upload Size 50kb</p>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="img-3">Inter Marksheet</label>
                    <input
                      type="file"
                      className="form-control"
                      id="img-3"
                      name="img"
                    />
                  </div>
                  <p>Max Upload Size 50kb</p>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor="img-4">Aadhar Card</label>
                    <input
                      type="file"
                      className="form-control"
                      id="img-4"
                      name="img"
                    />
                  </div>
                  <p>Max Upload Size 50kb</p>
                </div>
                {selectedProgram === "Postgraduate" && (
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="img-5">
                        Graduation Final Marksheet or Provisional Certificate
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="img-5"
                        name="img"
                      />
                    </div>
                    <p>Max Upload Size 50kb</p>
                  </div>
                )}
                {selectedCategory !== "Unreserved" && (
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="img-5">Cast Certificate</label>
                      <input
                        type="file"
                        className="form-control"
                        id="img-5"
                        name="img"
                      />
                    </div>
                    <p>Max Upload Size 50kb</p>
                  </div>
                )}
                {selectedDisability === "yes" && (
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="img-5">Disability Certificate</label>
                      <input
                        type="file"
                        className="form-control"
                        id="img-5"
                        name="img"
                      />
                    </div>
                    <p>Max Upload Size 50kb</p>
                  </div>
                )}
              </div>
              {/* Submitting button */}
              <div className="col-lg-12 col-md-12 mt-4">
                <div className="form-group checkboxs">
                  <input type="checkbox" id="chb2" />
                  <p>
                    By submitting this form, you agree to the{" "}
                    <a href="terms-conditions.html">Terms & Conditions</a> and{" "}
                    <a href="privacy-policy.html">Privacy Policy</a> notice.
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <button type="submite" className="default-btn">
                  Submit application
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function SchoolingDetails({
  selectingyear,
  handleSelectingYear,
  yearError,
  selectedBoard,
  handleBoardChange,
  educationBoard,
  selectedStream,
  handleselectedStream,
  obtainedPersentage,
  handlesObtainedPercentage,
  persentageError,
}) {
  return (
    <>
      <h4 className="h4 mb-4">Inter Schooling Details</h4>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label>School Name*</label>
            <input
              className="form-control"
              type="text"
              name="School"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label>Year of completion*</label>
            <div className="input-group date" id="datetimepicker-2">
              <input
                type="text"
                name="year"
                className="form-control"
                value={selectingyear}
                onChange={handleSelectingYear}
                required
              />
            </div>
            {yearError && <div style={{ color: "red" }}>{yearError}</div>}
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label>Board*</label>
            <select
              className="form-control"
              value={selectedBoard}
              onChange={handleBoardChange}
              required
            >
              <option value="0">Select</option>
              {educationBoard.map((board, i) => (
                <option value={board.name} key={i}>
                  {board.name}
                </option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line"></i>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label>Stream* </label>
            <select
              className="form-control"
              value={selectedStream}
              onChange={handleselectedStream}
              required
            >
              <option value="0">Select Stream</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
              <option value="arts">Arts</option>
              <option value="other">Other</option>
            </select>
            <i className="ri-arrow-down-s-line"></i>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label>Percentage/Grade Obtained*</label>
            <input
              type="text"
              className="form-control"
              name="study"
              value={obtainedPersentage}
              onChange={handlesObtainedPercentage}
              required
            />
          </div>
          {persentageError && (
            <div style={{ color: "red" }}>{persentageError}</div>
          )}
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label>Subjects Studied (Separated by comma)*</label>
            <input
              type="text"
              className="form-control"
              name="Subjects"
              required
            />
          </div>
        </div>
      </div>
    </>
  );
}
