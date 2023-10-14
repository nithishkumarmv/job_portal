import React from "react";
import { JobsList } from "../helpers/JobsList";
import JobsItem from "../components/JobsItem";
import '../styles/Jobs.css'

function Jobs() {
  return (
    <div className="Jobs">
      <h1 className="jobTitle">JOBS LIST</h1>
      <div className="jobsList">
        {JobsList.map((jobsItem, key) => {
          return (
            <JobsItem
              job ID={key}
              image={jobsItem.image}
              Username={jobsItem.name}
              Username1={jobsItem.name1}
              Location={jobsItem.loc}
              Salary={jobsItem.Salary}
              Info={jobsItem.Info}
              Experience={jobsItem.Experience}

            />
          );
        })}
      </div>
    </div>
  );
}

export default Jobs;

// Job ID (Primary Key), Employer ID (Foreign Key referencing Users Table), Title, Description, Location, Salary, experience required and any other job-related information.