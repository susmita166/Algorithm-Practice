class Development {

    constructor(organization) {
        this.organization  = organization ;
    }

    #departmentWithHighestAverageSalary() {
        let getOrganization = this.organization;
        let teamDepartmentObj = [];
        let sum;
        let employeeCount;
        getOrganization.departments.forEach((departmentDetails)=>{
           sum = employeeCount = 0;
           departmentDetails.teams.forEach((teamsDetails)=>{
                employeeCount += teamsDetails.employees.length;

                sum = sum + teamsDetails.employees.reduce((acc, employeesDetails)=>{
                    acc = acc + parseInt(employeesDetails.salary);
                    return acc;
                }, 0)
            })
            teamDepartmentObj.push({
                "department_id": departmentDetails.department_id,
                "department_name": departmentDetails.department_name,
                "average_salary": sum / employeeCount
            });
        })
        let getSalary = teamDepartmentObj.map((data)=>data.average_salary);
        let maxSalary = Math.max(...getSalary);
        let matchObj = teamDepartmentObj.filter((data)=> data.average_salary === maxSalary);
        return matchObj;        
    }


    #teamsWithMoreThannEmployees(noOfEmployee) {
        let departmentWithTeam = [];
        organization.departments.forEach((departments)=>{
            departments.teams.forEach((teams)=>{
                departmentWithTeam.push({"team_id":teams.team_id,"noOfEmployee":teams.employees.length, "employeeDetails":teams.employees});
            })
        })
        let getEmployeeDetails = departmentWithTeam.filter(data =>data.noOfEmployee > noOfEmployee);
        return getEmployeeDetails;
    }


    #employeeWithLowestSalaryInEachDepartment() {
        let employeeObj = [];
        let minSalary;
        organization.departments.forEach((departments)=>{
            minSalary = 0;
            departments.teams.forEach((teams)=>{
                teams.employees.forEach((employees)=>{
                    employeeObj.push({"employee_id":employees.employee_id, "department_name":departments.department_name, "salary":employees.salary });
                })
            })
        })
        let getSalary = employeeObj.map(data => data.salary);
        let getMinSalary = Math.max(...getSalary);
        let employeeWithMinimumSalary = employeeObj.filter(data => data.salary === getMinSalary);
        return employeeWithMinimumSalary;
    }


    #groupEmployeesByPosition() {
        let employeeDetails = [];
        organization.departments.forEach((departments)=>{
            departments.teams.forEach((teams)=>{
                teams.employees.forEach((employees)=>{
                    employeeDetails.push(employees)
                })
            })
        })
        let groupByPosition = {} ;
        employeeDetails.forEach((employee)=>{
            let position = employee.position;
            if(!groupByPosition[position]){
                groupByPosition[position] = [];
            }
            groupByPosition[position].push(employee);
        })
        return groupByPosition;        
    }

    #totalSalaryByDepartmentAndTeam() {
        let departmentDetails = organization.departments;
        let resultObj = {};
        departmentDetails.forEach((data)=>{
            let departmentName = data.department_name;
            let teamObj = {};
            data.teams.forEach((teams)=>{
                let salarySum = teams.employees.reduce((acc, currentValue)=>{
                    acc = acc + currentValue.salary;
                    return acc ;
                },0);
                teamObj[teams.team_name] = salarySum;
            })
            resultObj[departmentName] = teamObj;
        })
        return resultObj;
    }


    totalSalaryByDepartmentAndTeamFromDevClass() {
        return this.#totalSalaryByDepartmentAndTeam();
    }


    groupEmployeesByPositionFromDevClass() {
        return this.#groupEmployeesByPosition();
    }

    employeeWithLowestSalaryInEachDepartmentFromDevClass() {
        return this.#employeeWithLowestSalaryInEachDepartment();
    }

    departmentWithHighestAverageSalaryfoFromDevClass() {
        return this.#departmentWithHighestAverageSalary();
    }

    teamsWithMoreThannEmployeesFromDevClass(noOfEmployee) {
        return this.#teamsWithMoreThannEmployees(noOfEmployee);
    }

}

const organization = {
    "organization_id": 456,
    "organization_name": "Tech Solutions Inc.",
    "departments": [
      {
        "department_id": 1,
        "department_name": "Engineering",
        "teams": [
          {
            "team_id": 101,
            "team_name": "IOS Developer",
            "employees": [
              {
                "employee_id": 1,
                "employee_name": "Alice",
                "position": "Senior Developer",
                "salary": 30000
              },
              {
                "employee_id": 2,
                "employee_name": "Bob",
                "position": "Junior Developer",
                "salary": 80000
              }
            ]
          },
          {
            "team_id": 102,
            "team_name": "Android Developer",
            "employees": [
              {
                "employee_id": 3,
                "employee_name": "Charlie",
                "position": "Senior Developer",
                "salary": 15000
              }
            ]
          }
        ]
      },
      {
        "department_id": 2,
        "department_name": "Human Resources",
        "teams": [
          {
            "team_id": 201,
            "team_name": "Recruitment",
            "employees": [
              {
                "employee_id": 4,
                "employee_name": "David",
                "position": "Recruiter",
                "salary": 70000
              }
            ]
          },
          {
            "team_id": 202,
            "team_name": "Employee Relations",
            "employees": [
              {
                "employee_id": 5,
                "employee_name": "Eve",
                "position": "HR Manager",
                "salary": 90000
              }
            ]
          }
        ]
      },
      {
        "department_id": 3,
        "department_name": "It Department",
        "teams": [
          {
            "team_id": 301,
            "team_name": "Backend Developer",
            "employees": [
              {
                "employee_id": 41,
                "employee_name": "David",
                "position": "Software Engineer",
                "salary": 100000
              }
            ]
          },
          {
            "team_id": 302,
            "team_name": "Frontend Developer",
            "employees": [
              {
                "employee_id": 42,
                "employee_name": "Eve",
                "position": "Senior Software Engineer",
                "salary": 90000
              }
            ]
          },
          {
            "team_id": 303,
            "team_name": "Database Developer",
            "employees": [
              {
                "employee_id": 43,
                "employee_name": "Eve",
                "position": "Project Manager",
                "salary": 190000
              },
              {
                "employee_id": 44,
                "employee_name": "Ritu",
                "position": "It Analyst",
                "salary": 50000
              },
              {
                "employee_id": 44,
                "employee_name": "Esha",
                "position": "Senior Software Engineer",
                "salary": 40000
              }

            ]
          }
        ]
      }
    ]
};
  

const getDev = new Development(organization);
let departmentWithHighestAverageSalary = getDev.departmentWithHighestAverageSalaryfoFromDevClass();
let teamsWithMoreThannEmployees = getDev.teamsWithMoreThannEmployeesFromDevClass("2"); 
let employeeWithLowestSalaryInEachDepartment = getDev.employeeWithLowestSalaryInEachDepartmentFromDevClass(); 
let groupEmployeesByPosition = getDev.groupEmployeesByPositionFromDevClass(); 
let totalSalaryByDepartmentAndTeam = getDev.totalSalaryByDepartmentAndTeamFromDevClass(); 
// console.log('Find the Department with the Highest Average Salary:', departmentWithHighestAverageSalary);
// console.log('Team objects with more than employee:', teamsWithMoreThannEmployees);
// console.log('Find the Employee with the Lowest Salary in Each Department:', employeeWithLowestSalaryInEachDepartment);
// console.log('Nested Structure of Employees by Position:', groupEmployeesByPosition);
console.log('Total Salary by Department and Team:', totalSalaryByDepartmentAndTeam);