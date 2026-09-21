class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        clean_str1 = s.replace(" "," ").lower()
        clean_str2 = t.replace(" "," ").lower()

        return Counter(clean_str1) == Counter(clean_str2)
