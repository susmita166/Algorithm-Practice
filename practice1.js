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

        getProject.towers.map((towerData) =>{
            towerData.floors.map((towerFloorData)=>{
                towerFloorData.units.map((towerFloorUnitData)=>{
                    getUnits.push(towerFloorUnitData);
                })
            })
        });

        getDevelopment.structures.map((developmentStructureData)=>{
            developmentStructureData.floors.map((DevelopmentStructureFloorData)=>{
                DevelopmentStructureFloorData.apartments.map((DevelopmentStructureFloorApartmentData)=>{
                    getApartments.push(DevelopmentStructureFloorApartmentData);
                })
            })
        })
        return { units: getUnits, apartments: getApartments };
    }

    #getCommonTowerDetails(){
        let getProject = this.project;
        let getDevelopment = this.development;
        let tower_details = [];

        getProject.towers.map((projectData)=>{
            let getMatchValue = getDevelopment.structures.filter((developmentData)=> projectData.tower_id == developmentData.tower_id);
            if (getMatchValue.length > 0) {
                tower_details.push({
                    tower_id: getMatchValue[0].tower_id,
                    tower_name: getMatchValue[0].tower_name
                });
            }
        })
        return tower_details;
    }

    #getCommonFloorDetails(){
        let getProject = this.project;
        let getDevelopment = this.development;
        let floor_details = [];
        getProject.towers.forEach((towerData) =>{
            towerData.floors.forEach((floorData)=>{
                getDevelopment.structures.forEach((developmentStructureData)=>{
                    developmentStructureData.floors.forEach((developmentStructureFloorData)=>{
                        if((developmentStructureFloorData.hasOwnProperty('floor_id')) && (floorData.floor_id == developmentStructureFloorData.floor_id)){
                            floor_details.push({
                                "tower_id":towerData.tower_id,
                                "floor_id":developmentStructureFloorData.floor_id,
                                "floor_number":developmentStructureFloorData.floor_number,
                                "floor_type":developmentStructureFloorData.floor_type,
                                "units": floorData.units,
                                "apartments": developmentStructureFloorData.apartments
                            })
                        }
                    })
                })
            })
        })
        return floor_details;
    }

    #calculateTotalarea(){
        let getProject = this.project;
        let sum = 0;
        getProject.towers.forEach((towerData) =>{
            towerData.floors.forEach((floorData)=>{
                sum += floorData.units.reduce((acc, currentValue)=>{
                    acc =  acc + currentValue.area;
                    return acc;
                }, 0);
            })
        })
        return sum;
    }

    #calculateTotalSquareFootage(){
        let getDevelopment = this.development;
        let sum = 0;

        getDevelopment.structures.map((structureData)=>{
            structureData.floors.map((floorData)=>{
                sum = sum + floorData.apartments.reduce((acc, appartmentData)=>{
                    acc = acc + appartmentData.square_footage;
                    return acc;
                }, 0)
            })
        })
        return sum ;
    }

    #findOwnerByName (owner_name){
        let ownerName = owner_name;
        let getProject = this.project;
        let getOwnerObj = []; 
        getProject.towers.map((towerData)=>{
            towerData.floors.map((floorData)=>{
                floorData.units.map((unitsData)=>{
                    getOwnerObj.push(unitsData.owner)
                })
            })
        })
        let getOwnerDetails = getOwnerObj.find((obj)=>{
           return obj.hasOwnProperty("owner_name") && obj['owner_name'].toLowerCase() === ownerName.toLowerCase();
        });
        if (getOwnerDetails) {
            return {"owner_name":owner_name, "owner_details":getOwnerDetails};  
        } else {
            return {"owner_name":owner_name, "owner_details":"Owner Not Found"}; 
        }
    }

    #countUnitByFloorType (towerId, floor_type){
        let tower_id = parseInt(towerId);
        let floorType = floor_type;
        let getProject = this.project;
        let getUnitCount = 0; 
        getProject.towers.forEach((towerData) =>{
            if (towerData.tower_id === tower_id) {
                const matchingFloors = towerData.floors.filter((floorData) =>floorData.floor_type.toLowerCase() === floorType.toLowerCase());
                matchingFloors.forEach((data)=>{
                    getUnitCount = getUnitCount + data.units.reduce((acc, currentValue)=>{
                        acc = acc + 1;
                        return acc ;
                    }, 0)
                })
            }
        })
       return getUnitCount;
    }

    #countAppartmentByFloorType (towerId, floor_type){

    }

    countAppartmentByFloorTypeFromDevClass(towerId, floor_type) {
        return this.#countAppartmentByFloorType(towerId, floor_type);
    }

    countUnitsByFloorTypeFromDevClass(towerId, floor_type) {
        return this.#countUnitByFloorType(towerId, floor_type);
    }

    findOwnerByNameFromDevClass(owner_name) {
        return this.#findOwnerByName(owner_name);
    }

    getSumOfTotalSquareFootageFromDevClass(){
        return this.#calculateTotalSquareFootage();
    }

    getSumOfTotalAreaFromDevClass(){
        return this.#calculateTotalarea();
    }
  
    getAllUnitsAndResidentsFromDevClass() {
        return this.#getAllUnitsAndResidents();
    }

    GetAllCommonTowerDetailsFromDev() {
        return this.#getCommonTowerDetails();
    }

    GetAllCommonFloorDetailsFromDev() {
        return this.#getCommonFloorDetails();
    }
}

const project = {
    "project_id": 123,
    "project_name": "Building Construction",
    "location": "Downtown",
    "construction_date": "2022-01-15",
    "last_renovation_date": "2023-06-10",
    "towers": [
      {
        "tower_id": 1,
        "tower_name": "Tower Alpha",
        "construction_date": "2022-01-15",
        "last_renovation_date": "2023-06-10",
        "floors": [
          {
            "floor_id": 1,
            "floor_number": 1,
            "floor_type": "Residential",
            "description": "Prime residential units",
            "units": [
              {
                "unit_id": 101,
                "unit_number": "1A",
                "area": 1200,
                "owner": {
                  "owner_id": 1,
                  "owner_name": "John Doe",
                  "contact": "john.doe@example.com",
                  "contact_number": "123-456-7890"
                },
                "features": ["Balcony", "Sea View"]
              },
              {
                "unit_id": 102,
                "unit_number": "1B",
                "area": 1300,
                "owner": {
                  "owner_id": 2,
                  "owner_name": "Jane Smith",
                  "contact": "jane.smith@example.com",
                  "contact_number": "098-765-4321"
                },
                "features": ["Gym Access", "Private Parking"]
              }
            ]
          },
          {
            "floor_id": 2,
            "floor_number": 2,
            "floor_type": "Commercial",
            "description": "Office spaces",
            "units": [
              {
                "unit_id": 201,
                "unit_number": "2A",
                "area": 1500,
                "owner": {
                  "owner_id": 3,
                  "owner_name": "Alice Johnson",
                  "contact": "alice.johnson@example.com",
                  "contact_number": "234-567-8901"
                },
                "features": ["Conference Room", "High-Speed Internet"]
              }
            ]
          },
          {
            "floor_id": 3,
            "floor_number": 3,
            "floor_type": "Residential",
            "description": "Luxury apartments",
            "units": [
              {
                "unit_id": 103,
                "unit_number": "3A",
                "area": 1400,
                "owner": {
                  "owner_id": 4,
                  "owner_name": "Bob Brown",
                  "contact": "bob.brown@example.com",
                  "contact_number": "345-678-9012"
                },
                "features": ["Rooftop Access", "Pool"]
              }
            ]
          }
        ]
      },
      {
        "tower_id": 2,
        "tower_name": "Tower Beta",
        "construction_date": "2022-02-20",
        "last_renovation_date": "2023-05-15",
        "floors": [
          {
            "floor_id": 1,
            "floor_number": 1,
            "floor_type": "Residential",
            "description": "Affordable housing",
            "units": [
              {
                "unit_id": 201,
                "unit_number": "1C",
                "area": 1250,
                "owner": {
                  "owner_id": 5,
                  "owner_name": "Emily Davis",
                  "contact": "emily.davis@example.com",
                  "contact_number": "456-789-0123"
                },
                "features": ["Community Garden", "Playground"]
              }
            ]
          },
          {
            "floor_id": 2,
            "floor_number": 2,
            "floor_type": "Commercial",
            "description": "Retail shops",
            "units": [
              {
                "unit_id": 301,
                "unit_number": "2B",
                "area": 1600,
                "owner": {
                  "owner_id": 6,
                  "owner_name": "Michael Lee",
                  "contact": "michael.lee@example.com",
                  "contact_number": "567-890-1234"
                },
                "features": ["Street Access", "Display Window"]
              }
            ]
          }
        ]
      },
      {
        "tower_id": 3,
        "tower_name": "Tower Gamma",
        "construction_date": "2023-03-10",
        "last_renovation_date": "2024-01-01",
        "floors": [
          {
            "floor_id": 1,
            "floor_number": 1,
            "floor_type": "Residential",
            "description": "High-end apartments",
            "units": [
              {
                "unit_id": 401,
                "unit_number": "1D",
                "area": 1550,
                "owner": {
                  "owner_id": 7,
                  "owner_name": "Sophie White",
                  "contact": "sophie.white@example.com",
                  "contact_number": "678-901-2345"
                },
                "features": ["Gym", "Spa"]
              }
            ]
          },
          {
            "floor_id": 2,
            "floor_number": 2,
            "floor_type": "Commercial",
            "description": "Tech startups",
            "units": [
              {
                "unit_id": 501,
                "unit_number": "2C",
                "area": 1700,
                "owner": {
                  "owner_id": 8,
                  "owner_name": "James Wilson",
                  "contact": "james.wilson@example.com",
                  "contact_number": "789-012-3456"
                },
                "features": ["Shared Workspace", "Conference Facilities"]
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
    "construction_date": "2023-01-10",
    "total_towers": 5,
    "structures": [
      {
        "tower_id": 1,
        "tower_name": "Tower Alpha",
        "construction_date": "2023-01-10",
        "last_renovation_date": "2023-12-01",
        "floors": [
          {
            "floor_id": 1,
            "floor_number": 1,
            "floor_type": "Residential",
            "description": "Prime residential units",
            "apartments": [
              {
                "apartment_id": 201,
                "apartment_number": "A1",
                "square_footage": 1100,
                "resident": {
                  "resident_id": 101,
                  "name": "Michael Scott",
                  "contact_info": "michael.scott@example.com",
                  "phone_number": "123-456-7890"
                }
              },
              {
                "apartment_id": 202,
                "apartment_number": "A2",
                "square_footage": 1150,
                "resident": {
                  "resident_id": 102,
                  "name": "Dwight Schrute",
                  "contact_info": "dwight.schrute@example.com",
                  "phone_number": "098-765-4321"
                }
              }
            ]
          },
          {
            "floor_id": 2,
            "floor_number": 2,
            "floor_type": "Residential",
            "description": "Spacious apartments",
            "apartments": [
              {
                "apartment_id": 203,
                "apartment_number": "B1",
                "square_footage": 1200,
                "resident": {
                  "resident_id": 103,
                  "name": "Jim Halpert",
                  "contact_info": "jim.halpert@example.com",
                  "phone_number": "234-567-8901"
                }
              }
            ]
          },
          {
            "floor_id": 3,
            "floor_number": 3,
            "floor_type": "Commercial",
            "description": "Office spaces",
            "apartments": [
              {
                "apartment_id": 204,
                "apartment_number": "C1",
                "square_footage": 1300,
                "resident": {
                  "resident_id": 104,
                  "name": "Stanley Hudson",
                  "contact_info": "stanley.hudson@example.com",
                  "phone_number": "345-678-9012"
                }
              }
            ]
          }
        ]
      },
      {
        "tower_id": 2,
        "tower_name": "Tower Beta",
        "construction_date": "2023-02-15",
        "last_renovation_date": "2024-01-20",
        "floors": [
          {
            "floor_id": 4,
            "floor_number": 1,
            "floor_type": "Residential",
            "description": "Affordable housing",
            "apartments": [
              {
                "apartment_id": 205,
                "apartment_number": "D1",
                "square_footage": 1000,
                "resident": {
                  "resident_id": 105,
                  "name": "Angela Martin",
                  "contact_info": "angela.martin@example.com",
                  "phone_number": "456-789-0123"
                }
              }
            ]
          },
          {
            "floor_id": 5,
            "floor_number": 2,
            "floor_type": "Commercial",
            "description": "Retail and services",
            "apartments": [
              {
                "apartment_id": 206,
                "apartment_number": "E1",
                "square_footage": 1400,
                "resident": {
                  "resident_id": 106,
                  "name": "Oscar Martinez",
                  "contact_info": "oscar.martinez@example.com",
                  "phone_number": "567-890-1234"
                }
              }
            ]
          }
        ]
      },
      {
        "tower_id": 3,
        "tower_name": "Tower Gamma",
        "construction_date": "2023-03-20",
        "last_renovation_date": "2024-02-15",
        "floors": [
          {
            "floor_id": 6,
            "floor_number": 1,
            "floor_type": "Residential",
            "description": "Luxury apartments",
            "apartments": [
              {
                "apartment_id": 207,
                "apartment_number": "F1",
                "square_footage": 1350,
                "resident": {
                  "resident_id": 107,
                  "name": "Phyllis Vance",
                  "contact_info": "phyllis.vance@example.com",
                  "phone_number": "678-901-2345"
                }
              }
            ]
          },
          {
            "floor_id": 7,
            "floor_number": 2,
            "floor_type": "Residential",
            "description": "Modern apartments",
            "apartments": [
              {
                "apartment_id": 208,
                "apartment_number": "G1",
                "square_footage": 1400,
                "resident": {
                  "resident_id": 108,
                  "name": "Kelly Kapoor",
                  "contact_info": "kelly.kapoor@example.com",
                  "phone_number": "789-012-3456"
                }
              }
            ]
          }
        ]
      },
      {
        "tower_id": 4,
        "tower_name": "Tower Delta",
        "construction_date": "2023-04-25",
        "last_renovation_date": "2024-03-10",
        "floors": [
          {
            "floor_id": 8,
            "floor_number": 1,
            "floor_type": "Residential",
            "description": "Spacious living spaces",
            "apartments": [
              {
                "apartment_id": 209,
                "apartment_number": "H1",
                "square_footage": 1500,
                "resident": {
                  "resident_id": 109,
                  "name": "Ryan Howard",
                  "contact_info": "ryan.howard@example.com",
                  "phone_number": "890-123-4567"
                }
              }
            ]
          }
        ]
      },
      {
        "tower_id": 5,
        "tower_name": "Tower Epsilon",
        "construction_date": "2023-05-30",
        "last_renovation_date": "2024-04-05",
        "floors": [
          {
            "floor_id": 9,
            "floor_number": 1,
            "floor_type": "Commercial",
            "description": "Business units",
            "apartments": [
              {
                "apartment_id": 210,
                "apartment_number": "I1",
                "square_footage": 1600,
                "resident": {
                  "resident_id": 110,
                  "name": "Toby Flenderson",
                  "contact_info": "toby.flenderson@example.com",
                  "phone_number": "901-234-5678"
                }
              }
            ]
          }
        ]
      }
    ]
};


const getDev = new Development(project, development);
let { units, apartments } = getDev.getAllUnitsAndResidentsFromDevClass();
let tower_details = getDev.GetAllCommonTowerDetailsFromDev();
let floor_details = getDev.GetAllCommonFloorDetailsFromDev();
let sumOfArea = getDev.getSumOfTotalAreaFromDevClass();
let sumOfSquareFootage = getDev.getSumOfTotalSquareFootageFromDevClass();
let findOwnerByName = getDev.findOwnerByNameFromDevClass("ritu");
let countUnitsByFloorType = getDev.countUnitsByFloorTypeFromDevClass("1", "Residential");
let countAppartmentByFloorType = getDev.countAppartmentByFloorTypeFromDevClass("1", "Residential");

// console.log('Units:', units);
// console.log('Apartments:', apartments);
// console.log('Common Tower Details:', tower_details);
// console.log('Common Floor Details:', floor_details);
// console.log('Sum of area:', sumOfArea);
// console.log('Sum of Square Footage:', sumOfSquareFootage);
// console.log('Find Owner By Name:', findOwnerByName);
// console.log('Total Units In This Floor Type is:', countUnitsByFloorType);





  