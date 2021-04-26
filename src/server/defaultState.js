export const defaultState = {
  users:[{
    id: "U1",
    name: "Dev"
  },{
    id: "U2",
    name: "Israel"
  }], 
  groups:[{
    name: "To Do",
    id: "G1",
    owner: "U1"
  },{
    name: "Working here",
    id: "G2",
    owner: "U2"
  }],
  tasks:[{
    name: "Do Tests",
    id: "T1",
    group: "G1",
    owner: "U1",
    isComplete: false
  },{
    name: "Refactor tasks",
    id: "T2",
    group: "G1",
    owner: "U2",
    isComplete: false
  },{
    name: "Meet The CEO",
    id: "T3",
    group: "G1",
    owner: "U1",
    isComplete: false
  }],
  comments: [{
    owner: "U1",
    id: "C1",
    task: "T1",
    content: "Great Work !!!"
  }]
}