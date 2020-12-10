const solvePuzzle = (input) => {
  const rows = input.split('\n').filter(Boolean).map(it => parseInt(it)).sort((a, b) => a - b);

  rows.unshift(0);
  rows.push(rows[rows.length - 1] + 3);

  countBackwards(rows, rows.length - 1);

  return cache[0];
}

const cache = {};

const countBackwards = (rows, index) => {
  cache[index] = countToEnd(rows, index);

  if (index > 0) {
    countBackwards(rows, index - 1);
  }
}

const countToEnd = (rows, index) => {
  if (index === rows.length - 1) {
    return 1;
  }

  let count = 0;
  for (let i = 1; i <= 3; i++) {
    if (rows[index + i] && rows[index + i] - rows[index] <= 3) {
      count += cache[index + i];
    }
  }

  return count;
}

const CORRECT_ANSWER = 28346956187648;
const INPUT = `
77
10
143
46
79
97
54
116
60
91
80
132
20
154
53
14
103
31
65
110
43
38
47
120
112
87
24
95
33
104
73
22
66
137
21
109
118
63
55
124
146
148
84
86
147
125
23
85
117
71
48
136
151
130
83
56
140
9
49
113
131
133
74
37
127
34
32
106
1
78
11
72
40
96
17
64
92
102
123
126
90
105
57
99
27
70
98
111
30
50
67
2
155
5
119
8
39
`;

const startDate = new Date();
const result = solvePuzzle(INPUT);
console.log('--- Puzzle result ---\n');
console.log(result);
console.log(result === CORRECT_ANSWER ? 'Test success' : 'Test fail');
console.log('Run time:', (new Date() - startDate)/1000, 'seconds');
console.log('\n---------------------');
