const flightInfo = require("./models/flightInfoModel");

const insert = async(data)=>{     
  try {
      const res = await flightInfo.create(data);
      return res;
  } catch (err) {
      throw(err);
  }
};

const findAll = async() =>{
    try {
        let res = await flightInfo.find();
        return res;
    } catch (error) {
        throw(err);
    }
    
};
const findOne = async(id)=>{
    try {
        let res = await flightInfo.findById(id);
        return res;
    } catch (error) {
        throw(err);
    }
};
const update = async(id, data)=>{
    try {
        let res = await flightInfo.findByIdAndUpdate(id, data);
        return res;
    } catch (error) {
        throw(err);
    }
};


module.exports = {
    insert:insert,
    findAll: findAll,
    findOne: findOne,
    update: update
};