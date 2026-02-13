import React from "react";

import SectionHeader from "../Summary/SectionHeader/SectionHeader";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { codeContainer, solutionStyles } from "./CodeExamples.styles";

const CodeExample: React.FC = () => {
  return (
    <Box component={"section"}>
      <SectionHeader title="CODE EXAMPLE" />
      <Box sx={codeContainer}>
        <Typography component={"pre"}>
          <Typography component={"code"}>
            {`How many ways can you make the sum of a number?

From Wikipedia:
https://en.wikipedia.org/wiki/Partition_(number_theory)

In number theory and combinatorics, a partition of a positive integer n,
also called an integer partition, is a way of writing n as a sum of
positive integers. Two sums that differ only in the order of their
summands are considered the same partition. If order matters, the sum
becomes a composition.

For example, the number 4 can be partitioned in five distinct ways:

4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1

Examples
Basic

sum(1)  // 1

sum(2)  // 2  -&gt; 1 + 1, 2

sum(3)  // 3  -&gt; 1 + 1 + 1, 1 + 2, 3

sum(4)  // 5  -&gt; 1 + 1 + 1 + 1, 1 + 1 + 2, 1 + 3, 2 + 2, 4

sum(5)  // 7  -&gt; 1 + 1 + 1 + 1 + 1, 1 + 1 + 1 + 2, 1 + 1 + 3,
1 + 2 + 2, 1 + 4, 5, 2 + 3

sum(10) // 42`}
          </Typography>
        </Typography>
        <Typography sx={solutionStyles} component="pre">
          <Typography component="code">
            {`function sum(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  
  for (let k = 1; k &lt;= n; k++) {
    for (let i = k; i &lt;= n; i++) {
        dp[i] += dp[i - k];
        }
        }
        
        return dp[n];
    }`}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default CodeExample;
