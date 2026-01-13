// LeetCode 316 - Remove Duplicate Letters
// Time: O(n), Space: O(1)

#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    string removeDuplicateLetters(string s) {
        vector<int> freq(26, 0);
        vector<bool> used(26, false);

        for (char c : s) freq[c - 'a']++;

        string stack = "";

        for (char c : s) {
            freq[c - 'a']--;

            if (used[c - 'a']) continue;

            while (!stack.empty() && stack.back() > c && freq[stack.back() - 'a'] > 0) {
                used[stack.back() - 'a'] = false;
                stack.pop_back();
            }

            stack.push_back(c);
            used[c - 'a'] = true;
        }
        return stack;
    }
};
