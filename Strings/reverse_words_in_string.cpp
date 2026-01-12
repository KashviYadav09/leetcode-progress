// LeetCode 151 - Reverse Words in a String
// Time: O(N)
// Space: O(1)

#include <string>
using namespace std;

class Solution {
public:
    string reverseWords(string s) {
        int i = 0, n = s.length();
        string result = "";

        while (i < n) {
            while (i < n && s[i] == ' ') i++;
            if (i >= n) break;

            int j = i;
            while (j < n && s[j] != ' ') j++;

            string word = s.substr(i, j - i);
            result = result.empty() ? word : word + " " + result;
            i = j;
        }
        return result;
    }
};
