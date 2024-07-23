class Development {

    constructor(project, development) {
        this.project = project;
        this.development = development;
    }

    #getAllUnitsAndResidents() {
        let getProject = this.project;
        let getDevelopment = this.development;

        let getUnits = [];
        let getApartments = [];

        // getProject.towers.map((towerData) =>{
        //     towerData.floors.map((towerFloorData)=>{
        //         towerFloorData.units.map((towerFloorUnitData)=>{
        //             getUnits.push(towerFloorUnitData);
        //         })
        //     })
        // });

        // getDevelopment.structures.map((developmentStructureData)=>{
        //     developmentStructureData.floors.map((DevelopmentStructureFloorData)=>{
        //         DevelopmentStructureFloorData.apartments.map((DevelopmentStructureFloorApartmentData)=>{
        //             getApartments.push(DevelopmentStructureFloorApartmentData);
        //         })
        //     })
        // })
        // return { units: getUnits, apartments: getApartments };

        this.#recursiveFunction();
    }

    #recursiveFunction(){

    }


    getAllUnitsAndResidentsFromDevClass() {
        return this.#getAllUnitsAndResidents();
    }
}

const project = {
    "project_id": 123,
    "project_name": "Building Construction",
    "location": "Downtown",
    "towers": [
      {
        "tower_id": 1,
        "tower_name": "Tower A",
        "floors": [
          {
            "floor_id": 1,
            "floor_number": 1,
            "floor_type": "Residential",
            "units": [
              {
                "unit_id": 101,
                "unit_number": "1A",
                "area": 1200,
                "owner": {
                  "owner_id": 1,
                  "owner_name": "John Doe",
                  "contact": "john.doe@example.com"
                }
              },
              {
                "unit_id": 102,
                "unit_number": "1B",
                "area": 1300,
                "owner": {
                  "owner_id": 2,
                  "owner_name": "Jane Smith",
                  "contact": "jane.smith@example.com"
                }
              }
            ]
          },
          {
            "floor_id": 2,
            "floor_number": 2,
            "floor_type": "Commercial",
            "units": [
              {
                "unit_id": 201,
                "unit_number": "2A",
                "area": 1500,
                "owner": {
                  "owner_id": 3,
                  "owner_name": "Alice Johnson",
                  "contact": "alice.johnson@example.com"
                }
              }
            ]
          }
        ]
      },
      {
        "tower_id": 2,
        "tower_name": "Tower B",
        "floors": [
          {
            "floor_id": 1,
            "floor_number": 1,
            "floor_type": "Residential",
            "units": [
              {
                "unit_id": 103,
                "unit_number": "1C",
                "area": 1250,
                "owner": {
                  "owner_id": 4,
                  "owner_name": "Bob Brown",
                  "contact": "bob.brown@example.com"
                }
              }
            ]
          }
        ]
      }
    ]
};
  
const development = {
    "development_id": 789,
    "development_name": "Residential Complex",
    "site": "Uptown",
    "structures": [
      {
        "tower_id": 1,  // Common tower ID
        "tower_name": "Structure Alpha",
        "floors": [
          {
            "floor_id": 1,  // Common floor ID
            "floor_number": 1,
            "floor_type": "Residential",
            "apartments": [
              {
                "apartment_id": 201,
                "apartment_number": "A1",
                "square_footage": 1100,
                "resident": {
                  "resident_id": 101,
                  "name": "Michael Scott",
                  "contact_info": "michael.scott@example.com"
                }
              },
              {
                "apartment_id": 202,
                "apartment_number": "A2",
                "square_footage": 1150,
                "resident": {
                  "resident_id": 102,
                  "name": "Dwight Schrute",
                  "contact_info": "dwight.schrute@example.com"
                }
              }
            ]
          },
          {
            "floor_id": 3,  // Unique floor ID
            "floor_number": 2,
            "floor_type": "Residential",
            "apartments": [
              {
                "apartment_id": 203,
                "apartment_number": "B1",
                "square_footage": 1200,
                "resident": {
                  "resident_id": 103,
                  "name": "Jim Halpert",
                  "contact_info": "jim.halpert@example.com"
                }
              }
            ]
          }
        ]
      },
      {
        "tower_id": 2,  // Common tower ID
        "tower_name": "Structure Beta",
        "floors": [
          {
            "floor_id": 4,  // Unique floor ID
            "floor_number": 1,
            "floor_type": "Residential",
            "apartments": [
              {
                "apartment_id": 204,
                "apartment_number": "C1",
                "square_footage": 1250,
                "resident": {
                  "resident_id": 104,
                  "name": "Pam Beesly",
                  "contact_info": "pam.beesly@example.com"
                }
              }
            ]
          }
        ]
      }
    ]
};

const getDev = new Development(project, development);
let {units, apartments}= getDev.getAllUnitsAndResidentsFromDevClass();

console.log('units:', units);
console.log('apartments:', apartments);






  