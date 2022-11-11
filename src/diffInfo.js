import _ from "lodash"

const getDiffInf = (data1, data2) => {
    const keys1 = Object.keys(data1) //obj to array
    const keys2 = Object.keys(data2)
    const keys = _.sortBy(_.union(keys1, keys2)) 
    
    const result = keys.map((key) => {
      const value1 = data1[key]
      const value2 = data2[key]
  
      if (_.isEqual(value1, value2)) {
        return {
          type: 'equal',
          key,
          value: value1,
        }
      }
      if (value1 && value2 && !_.isEqual(value1, value2)) { 
        return {
          type: 'noEqual',
          key,
          value1,
          value2,
        }
      }
      if (!Object.hasOwn(data2, key)) {
        return {
          type: 'onlyFirst',
          key,
          value: value1,
        }
      }
      if (!Object.hasOwn(data1, key)) {
        return {
          type: 'onlySecond',
          key,
          value: value2,
        }
      }
    })
    console.log (result)
    return result; //array of obj {type, key, val}
  }

export default getDiffInf