class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

    const need = new Map();
    const window = new Map();

    // Frequency of characters in t
    for (const ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    let have = 0;
    const needCount = need.size;

    let left = 0;

    let minLen = Infinity;
    let minStart = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        // Add current character to window
        window.set(ch, (window.get(ch) || 0) + 1);

        // Character requirement is now satisfied
        if (need.has(ch) && window.get(ch) === need.get(ch)) {
            have++;
        }

        // Window is valid
        while (have === needCount) {
            // Update minimum window
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }

            // Remove left character
            const leftChar = s[left];

            window.set(leftChar, window.get(leftChar) - 1);

            // Requirement is no longer satisfied
            if (
                need.has(leftChar) &&
                window.get(leftChar) < need.get(leftChar)
            ) {
                have--;
            }

            left++;
        }
    }

    return minLen === Infinity
        ? ""
        : s.substring(minStart, minStart + minLen);
    }
}
