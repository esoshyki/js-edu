/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
        const speed = config[focus]
        const distance = knowsProgramming ? 800 : 1300;
        return distance / speed;
  };
  

  const defaultStudentSpeedConfig = {
    family: 4,
    friends: 10,
    normal_life: 20,
    profession: 30,
    carrier: 40,
    top_peformance: 60
}

const problemStudentSpeedConfig = {
    family: 2,
    friends: 4,
    normal_life: 8,
    profession: 20,
    carrier: 30
}

const talentedStudentSpeedConfig = {
    normal_life: 30,
    profession: 40,
    carrier: 55,
    top_peformance: 70
}

  console.log( getTimeForEducation('family', true,  defaultStudentSpeedConfig))