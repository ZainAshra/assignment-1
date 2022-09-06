

let mobiles = {
    iphone: {
      v14: {
        ram: 4,
        rom: 32,
        price: 1000,
      },
      v14pro: {
        ram: 8,
        rom: 64,
        price: 12800,
      },
      v13: {
        ram: 2,
        rom: 6,
        price: 120,
      },
      v13pro: {
        ram: 8,
        rom: 64,
        price: 12800,
      },
    },
    samsung: {
      a30: {
        ram: 8,
        rom: 64,
        price: 12800,
      },
      a51: {
        ram: 8,
        rom: 64,
        price: 12800,
      },
      note5: {
        ram: 8,
        rom: 64,
        price: 12800,
      },
    },
    xiaomo: {
      redmi9: {
        ram: 32,
        rom: 64,
        price: 178,
      },
      red: {
        ram: 16,
        rom: 128,
        price: 999,
      },
    },
    infinix: {
      hot11: {
        ram: 32,
        rom: 64,
        price: 178,
      },
      hot12: {
        ram: 2,
        rom: 4,
        price: 30,
      },
    },
  };
  
  let companyNames = document.getElementById("companyName");
  let mobileModel = document.getElementById("mobileModel");
  
  let keys = Object.keys(mobiles);
  let objvalues = Object.values(mobiles);
  
  for (i = 0; i < keys.length; i++) {
    let opt = document.createElement("option");
    opt.innerHTML = keys[i];
    companyNames.appendChild(opt);
  }
  
  companyNames.onchange = function (event) {
    let companyName = event.target.options[event.target.selectedIndex].value;
    let companyNamestring = JSON.stringify(companyName);
    console.log(companyNamestring);
  
    let get_model = mobiles[companyName];
  
    console.log(get_model);
    console.log(Object.keys(get_model));
  
    let length_models = Object.keys(get_model).length;
  
    let mobileModel = document.getElementById("mobileModel");
    mobileModel.innerHTML = "";
  
    for (i = 0; i < length_models; i++) {
      let opt2 = document.createElement("option");
      opt2.innerHTML = Object.keys(get_model)[i];
      mobileModel.appendChild(opt2);
  
      mobileModel.onchange = function (event) {
        // let detail = event.target.options[event.target.selectedIndex].value;
        // let sdetail = JSON.stringify(detail);
  
        console.log(mobiles[companyNames.value][mobileModel.value]);
      };
    }
  };
  
  