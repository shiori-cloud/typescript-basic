type Student = {
  name: string;
  score: number;
};

const getResultMessage = (student: Student): string => {
  if (student.score >= 60) {
    return `${student.name}さんは合格です。`;
  } else {
    return `${student.name}さんは不合格です。`;
  }
};

const student = {
  name: '侍太郎',
  score: 70,
};

let resultMessage = getResultMessage(student);

console.log(resultMessage);
