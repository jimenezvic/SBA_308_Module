const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assigments: [  
        {
            id : 1,
            name: "Declare a Variable",
            due_at: "2023-01-05",
            points_possible: 50
        },
        {
            id : 2,
            name: "Write a Variable",
            due_at: "2024-02-08",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-08-01",
            points_possible: 500
        }
    ]
};

const LearnerSubmissions = [
    {
        learner_id: 125,  
        assigment_id: 1,  
        submission:{
            submitted_at: "2027-09-01",
            score: 47
        }
    },
    {
        learner_id: 192, 
        assigment_id: 2,  
        submission:{
            submitted_at: "2039-01-20", 
            score: 20
        }
    },
    {
        learner_id: 110,  
        assigment_id: 2,  
        submission:{
            submitted_at: "2023-03-29", 
            score: 30
        }
    },
    {
        learner_id: 390, 
        assigment_id: 3,  
        submission:{
            submitted_at: "2024-04-19",  
            score: 29
        }
    }
];

function learnerinformation(course, assigmentGroup, submissions) {
    
    const resultsAll = [];
    const learnersAll = {};

    submissions.forEach(submission => {
        const { learner_id, assigment_id, submission: { score } } = submission;
        const assignment = assigmentGroup.assignments.find(a => a.id === assigment_id);
        if (!assignment) return;

        const dueDate = new Date(assigment.due_at);
       
             const submittedDate = new Date(submission.submission.submitted_at);
        if (submittedDate > dueDate) return;

                          if (!learnersAll[learner_id]) {
           
            learnersAll[learner_id] = { id: learner_id, totalScore: 0, totalPoints: 0, assigments: {} };
        }

        learnersAll[learner_id].totalScore += score;
                  learnersAll[learner_id].totalPoints += assigment.points_possible;
                 learnersAll[learner_id].assigments[assigment_id] = score / assignment.points_possible;
                                                      });

    Object.keys(learnersAll).forEach(learner_id => {
            const learner = learnersAll[learner_id];
        const avg = learner.totalScore / learner.totalPoints;
                                            resultsAll.push({ id: learner.id, avg, ...learner.assigments });  // Push to resultsAll
    })
    ;

        return resultsAll;
}

const result = learnerinformation(CourseInfo, assigmentGroup, LearnerSubmissions);

console.log(result);
