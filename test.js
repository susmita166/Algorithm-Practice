let catagoryList = [
    {
      id: '3',
      status: '1',
      space_type_id: '1',
      space_category_name: 'Category three',
      space_type: {
        id: '1',
        status: '1',
        space_type_name: 'Space Type Three'
      }
    },
    {
      id: '4',
      status: '1',
      space_type_id: '1',
      space_category_name: 'Category thre',
      space_type: {
        id: '1',
        status: '1',
        space_type_name: 'Space Type Four'
      }
    },
    {
      id: '5',
      status: '1',
      space_type_id: '1',
      space_category_name: 'adsaf',
      space_type: {
        id: '1',
        status: '1',
        space_type_name: 'Space Type Five'
      }
    },
    {
      id: '6',
      status: '1',
      space_type_id: '2',
      space_category_name: 'sdddddddd',
      space_type: {
        id: '2',
        status: '1',
        space_type_name: 'space type Six'
      }
    },
    {
      id: '7',
      status: '1',
      space_type_id: '1',
      space_category_name: 'adsafaaaaaaaaaaa',
      space_type: {
        id: '1',
        status: '1',
        space_type_name: 'Space Type Seven'
      }
    },
    {
      id: '1',
      status: '1',
      space_type_id: '1',
      space_category_name: 'Category one edit',
      space_type: {
        id: '2',
        status: '1',
        space_type_name: 'space type one'
      }
    },
    {
      id: '2',
      status: '1',
      space_type_id: '2',
      space_category_name: 'Category two',
      space_type: {
        id: '1',
        status: '1',
        space_type_name: 'Space Type two'
      }
    }
]


let spaceList = [
    {
        id: '14',
        status: '1',
        floor_id: '219',
        space_category_id: '1',
        space_number: 'AA53I91',
        flat_number: 'OJ5601',
        super_built_up_area: '208.00',
        carpet_area: '8609.00',
        space_category_name: 'Category one edit'
    },
    {
        id: '15',
        status: '1',
        floor_id: '219',
        space_category_id: '2',
        space_number: 'AA53I9121',
        flat_number: 'OJ560101',
        super_built_up_area: '208.00',
        carpet_area: '8609.00',
        space_category_name: 'Category one edit'
    },
]

// find and merge by using map and filter
spaceList.map((data)=>{
    let matchData = catagoryList.find(catagory => catagory.id == data.space_category_id);
    if(matchData){
        data.space_type_id = matchData.space_type_id;
        data.space_type_name = matchData.space_type.space_type_name;
    }
});

// filter
console.log(spaceList);

