// LeetCode 238: Product of Array Except Self
// Date: 11-01-2026
// Approach: Prefix & Suffix product
// Time: O(n)
// Space: O(1) (excluding output array)

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];

        // Step 1: Prefix products
        result[0] = 1;
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        // Step 2: Suffix products
        int suffix = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] =  result[i] * suffix;
            suffix = suffix * nums[i];
        }

        return result;
    }
}
