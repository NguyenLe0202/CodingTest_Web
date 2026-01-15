const PROBLEMS = [
    {
        id: 1,
        title: "Two Sum",
        difficulty: "easy",
        category: "Array",
        description: "Cho một mảng số nguyên nums và một số đích target, trả về chỉ số của hai số có tổng bằng target.",
        hint: "Dùng bảng băm (hash map) để lưu số đã duyệt và kiểm tra phần tử còn thiếu. Với mỗi số, kiểm tra xem (target - num) đã có trong map chưa.",
        examples: [
            { input: "nums = [2, 7, 11, 15], target = 9", output: "[0, 1]", explanation: "nums[0] + nums[1] = 2 + 7 = 9" }
        ],
        starterCode: {
            javascript: `function twoSum(nums, target) {
    // Viết code của bạn ở đây

}

// Test
console.log(twoSum([2, 7, 11, 15], 9));`,
            python: `def two_sum(nums, target):
    # Viết code của bạn ở đây
    pass

# Test
print(two_sum([2, 7, 11, 15], 9))`
        },
        testCases: [
            { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
            { input: [[3, 2, 4], 6], expected: [1, 2] },
            { input: [[3, 3], 6], expected: [0, 1] }
        ],
        solution: {
            javascript: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
            python: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`
        }
    },
    {
        id: 2,
        title: "Reverse a String",
        difficulty: "easy",
        category: "String",
        description: "Đảo ngược một chuỗi ký tự và trả về chuỗi đã đảo ngược.",
        hint: "Dùng hai con trỏ (đầu và cuối) hoặc duyệt từ cuối chuỗi. Trong JavaScript có thể dùng split, reverse, join.",
        examples: [
            { input: 's = "hello"', output: '"olleh"' },
            { input: 's = "world"', output: '"dlrow"' }
        ],
        starterCode: {
            javascript: `function reverseString(s) {
    // Viết code của bạn ở đây

}

// Test
console.log(reverseString("hello"));`,
            python: `def reverse_string(s):
    # Viết code của bạn ở đây
    pass

# Test
print(reverse_string("hello"))`
        },
        testCases: [
            { input: ["hello"], expected: "olleh" },
            { input: ["world"], expected: "dlrow" },
            { input: ["abc"], expected: "cba" }
        ],
        solution: {
            javascript: `function reverseString(s) {
    return s.split('').reverse().join('');
}`,
            python: `def reverse_string(s):
    return s[::-1]`
        }
    },
    {
        id: 3,
        title: "Palindrome Check",
        difficulty: "easy",
        category: "String",
        description: "Kiểm tra một chuỗi có phải là palindrome (đọc xuôi ngược giống nhau) không. Trả về true/false.",
        hint: "So sánh chuỗi với chuỗi đảo ngược, hoặc dùng hai con trỏ từ đầu và cuối so sánh từng ký tự.",
        examples: [
            { input: 's = "racecar"', output: "true" },
            { input: 's = "hello"', output: "false" }
        ],
        starterCode: {
            javascript: `function isPalindrome(s) {
    // Viết code của bạn ở đây

}

// Test
console.log(isPalindrome("racecar"));`,
            python: `def is_palindrome(s):
    # Viết code của bạn ở đây
    pass

# Test
print(is_palindrome("racecar"))`
        },
        testCases: [
            { input: ["racecar"], expected: true },
            { input: ["hello"], expected: false },
            { input: ["a"], expected: true },
            { input: ["abba"], expected: true }
        ],
        solution: {
            javascript: `function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}`,
            python: `def is_palindrome(s):
    return s == s[::-1]`
        }
    },
    {
        id: 4,
        title: "FizzBuzz",
        difficulty: "easy",
        category: "Logic",
        description: "Trả về mảng từ 1 đến n. Nếu số chia hết cho 3 thay bằng 'Fizz', chia hết cho 5 thay bằng 'Buzz', chia hết cho cả hai thay bằng 'FizzBuzz'.",
        hint: "Duyệt từ 1 đến n, kiểm tra điều kiện chia hết cho 15 trước (vì 15 = 3*5), sau đó mới kiểm tra 3 và 5.",
        examples: [
            { input: "n = 5", output: '["1", "2", "Fizz", "4", "Buzz"]' }
        ],
        starterCode: {
            javascript: `function fizzBuzz(n) {
    // Viết code của bạn ở đây

}

// Test
console.log(fizzBuzz(15));`,
            python: `def fizz_buzz(n):
    # Viết code của bạn ở đây
    pass

# Test
print(fizz_buzz(15))`
        },
        testCases: [
            { input: [5], expected: ["1", "2", "Fizz", "4", "Buzz"] },
            { input: [15], expected: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"] }
        ],
        solution: {
            javascript: `function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(String(i));
    }
    return result;
}`,
            python: `def fizz_buzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result`
        }
    },
    {
        id: 5,
        title: "Find Missing Number",
        difficulty: "easy",
        category: "Array",
        description: "Cho một mảng chứa n số phân biệt từ 0 đến n, tìm số còn thiếu.",
        hint: "Tính tổng từ 0 đến n bằng công thức n*(n+1)/2, sau đó trừ đi tổng các phần tử trong mảng.",
        examples: [
            { input: "nums = [3, 0, 1]", output: "2", explanation: "n = 3, thiếu số 2" }
        ],
        starterCode: {
            javascript: `function missingNumber(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(missingNumber([3, 0, 1]));`,
            python: `def missing_number(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(missing_number([3, 0, 1]))`
        },
        testCases: [
            { input: [[3, 0, 1]], expected: 2 },
            { input: [[0, 1]], expected: 2 },
            { input: [[9,6,4,2,3,5,7,0,1]], expected: 8 }
        ],
        solution: {
            javascript: `function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}`,
            python: `def missing_number(nums):
    n = len(nums)
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum`
        }
    },
    {
        id: 6,
        title: "Find Duplicates",
        difficulty: "easy",
        category: "Array",
        description: "Tìm tất cả các phần tử trùng lặp trong mảng. Trả về mảng các phần tử bị trùng.",
        hint: "Dùng Set hoặc Object để đánh dấu phần tử đã xuất hiện. Nếu gặp lại thì thêm vào kết quả.",
        examples: [
            { input: "nums = [4, 3, 2, 7, 8, 2, 3, 1]", output: "[2, 3]" }
        ],
        starterCode: {
            javascript: `function findDuplicates(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));`,
            python: `def find_duplicates(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(find_duplicates([4, 3, 2, 7, 8, 2, 3, 1]))`
        },
        testCases: [
            { input: [[4, 3, 2, 7, 8, 2, 3, 1]], expected: [2, 3] },
            { input: [[1, 1, 2]], expected: [1] },
            { input: [[1, 2, 3]], expected: [] }
        ],
        solution: {
            javascript: `function findDuplicates(nums) {
    const seen = new Set();
    const duplicates = new Set();
    for (const num of nums) {
        if (seen.has(num)) duplicates.add(num);
        else seen.add(num);
    }
    return [...duplicates];
}`,
            python: `def find_duplicates(nums):
    seen = set()
    duplicates = set()
    for num in nums:
        if num in seen:
            duplicates.add(num)
        else:
            seen.add(num)
    return list(duplicates)`
        }
    },
    {
        id: 7,
        title: "Anagram Check",
        difficulty: "easy",
        category: "String",
        description: "Kiểm tra hai chuỗi có phải là anagram không (cùng ký tự nhưng thứ tự khác).",
        hint: "Sắp xếp hai chuỗi rồi so sánh, hoặc đếm tần suất ký tự bằng object/dictionary.",
        examples: [
            { input: 's = "anagram", t = "nagaram"', output: "true" },
            { input: 's = "rat", t = "car"', output: "false" }
        ],
        starterCode: {
            javascript: `function isAnagram(s, t) {
    // Viết code của bạn ở đây

}

// Test
console.log(isAnagram("anagram", "nagaram"));`,
            python: `def is_anagram(s, t):
    # Viết code của bạn ở đây
    pass

# Test
print(is_anagram("anagram", "nagaram"))`
        },
        testCases: [
            { input: ["anagram", "nagaram"], expected: true },
            { input: ["rat", "car"], expected: false },
            { input: ["listen", "silent"], expected: true }
        ],
        solution: {
            javascript: `function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
}`,
            python: `def is_anagram(s, t):
    return sorted(s) == sorted(t)`
        }
    },
    {
        id: 8,
        title: "Binary Search",
        difficulty: "easy",
        category: "Search",
        description: "Tìm kiếm nhị phân: tìm vị trí của target trong mảng đã sắp xếp. Trả về -1 nếu không tìm thấy.",
        hint: "Chia đôi mảng liên tục. So sánh phần tử giữa với target, nếu nhỏ hơn thì tìm nửa phải, ngược lại tìm nửa trái.",
        examples: [
            { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" }
        ],
        starterCode: {
            javascript: `function binarySearch(nums, target) {
    // Viết code của bạn ở đây

}

// Test
console.log(binarySearch([-1,0,3,5,9,12], 9));`,
            python: `def binary_search(nums, target):
    # Viết code của bạn ở đây
    pass

# Test
print(binary_search([-1,0,3,5,9,12], 9))`
        },
        testCases: [
            { input: [[-1,0,3,5,9,12], 9], expected: 4 },
            { input: [[-1,0,3,5,9,12], 2], expected: -1 },
            { input: [[5], 5], expected: 0 }
        ],
        solution: {
            javascript: `function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
            python: `def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`
        }
    },
    {
        id: 9,
        title: "Merge Two Sorted Arrays",
        difficulty: "easy",
        category: "Array",
        description: "Trộn hai mảng đã sắp xếp thành một mảng đã sắp xếp.",
        hint: "Dùng hai con trỏ để so sánh và chọn phần tử nhỏ hơn đưa vào kết quả.",
        examples: [
            { input: "nums1 = [1,2,4], nums2 = [1,3,4]", output: "[1,1,2,3,4,4]" }
        ],
        starterCode: {
            javascript: `function mergeSortedArrays(nums1, nums2) {
    // Viết code của bạn ở đây

}

// Test
console.log(mergeSortedArrays([1,2,4], [1,3,4]));`,
            python: `def merge_sorted_arrays(nums1, nums2):
    # Viết code của bạn ở đây
    pass

# Test
print(merge_sorted_arrays([1,2,4], [1,3,4]))`
        },
        testCases: [
            { input: [[1,2,4], [1,3,4]], expected: [1,1,2,3,4,4] },
            { input: [[1], []], expected: [1] },
            { input: [[], [1]], expected: [1] }
        ],
        solution: {
            javascript: `function mergeSortedArrays(nums1, nums2) {
    const result = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) result.push(nums1[i++]);
        else result.push(nums2[j++]);
    }
    while (i < nums1.length) result.push(nums1[i++]);
    while (j < nums2.length) result.push(nums2[j++]);
    return result;
}`,
            python: `def merge_sorted_arrays(nums1, nums2):
    result = []
    i = j = 0
    while i < len(nums1) and j < len(nums2):
        if nums1[i] <= nums2[j]:
            result.append(nums1[i])
            i += 1
        else:
            result.append(nums2[j])
            j += 1
    result.extend(nums1[i:])
    result.extend(nums2[j:])
    return result`
        }
    },
    {
        id: 10,
        title: "Reverse Array",
        difficulty: "easy",
        category: "Array",
        description: "Đảo ngược thứ tự các phần tử trong mảng.",
        hint: "Hoán đổi phần tử đầu và cuối, sau đó di chuyển vào trong cho đến khi gặp nhau.",
        examples: [
            { input: "nums = [1, 2, 3, 4, 5]", output: "[5, 4, 3, 2, 1]" }
        ],
        starterCode: {
            javascript: `function reverseArray(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(reverseArray([1, 2, 3, 4, 5]));`,
            python: `def reverse_array(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(reverse_array([1, 2, 3, 4, 5]))`
        },
        testCases: [
            { input: [[1, 2, 3, 4, 5]], expected: [5, 4, 3, 2, 1] },
            { input: [[1, 2]], expected: [2, 1] },
            { input: [[1]], expected: [1] }
        ],
        solution: {
            javascript: `function reverseArray(nums) {
    return nums.reverse();
}`,
            python: `def reverse_array(nums):
    return nums[::-1]`
        }
    },
    {
        id: 11,
        title: "Find Min and Max",
        difficulty: "easy",
        category: "Array",
        description: "Tìm số lớn nhất và nhỏ nhất trong mảng. Trả về object/dict với min và max.",
        hint: "Duyệt mảng, so sánh và cập nhật min/max. Hoặc dùng Math.min/max trong JS, min/max trong Python.",
        examples: [
            { input: "nums = [3, 1, 4, 1, 5, 9, 2, 6]", output: "{min: 1, max: 9}" }
        ],
        starterCode: {
            javascript: `function findMinMax(nums) {
    // Viết code của bạn ở đây
    // Trả về {min: ..., max: ...}

}

// Test
console.log(findMinMax([3, 1, 4, 1, 5, 9, 2, 6]));`,
            python: `def find_min_max(nums):
    # Viết code của bạn ở đây
    # Trả về {"min": ..., "max": ...}
    pass

# Test
print(find_min_max([3, 1, 4, 1, 5, 9, 2, 6]))`
        },
        testCases: [
            { input: [[3, 1, 4, 1, 5, 9, 2, 6]], expected: {min: 1, max: 9} },
            { input: [[5]], expected: {min: 5, max: 5} },
            { input: [[-1, -5, -3]], expected: {min: -5, max: -1} }
        ],
        solution: {
            javascript: `function findMinMax(nums) {
    return {
        min: Math.min(...nums),
        max: Math.max(...nums)
    };
}`,
            python: `def find_min_max(nums):
    return {"min": min(nums), "max": max(nums)}`
        }
    },
    {
        id: 12,
        title: "Remove Duplicates from Sorted Array",
        difficulty: "easy",
        category: "Array",
        description: "Xóa các phần tử trùng trong mảng đã sắp xếp, trả về mảng mới không có phần tử trùng.",
        hint: "Dùng Set để loại bỏ trùng lặp, hoặc dùng con trỏ để ghi đè phần tử không trùng.",
        examples: [
            { input: "nums = [1, 1, 2]", output: "[1, 2]" }
        ],
        starterCode: {
            javascript: `function removeDuplicates(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(removeDuplicates([1, 1, 2]));`,
            python: `def remove_duplicates(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(remove_duplicates([1, 1, 2]))`
        },
        testCases: [
            { input: [[1, 1, 2]], expected: [1, 2] },
            { input: [[0,0,1,1,1,2,2,3,3,4]], expected: [0,1,2,3,4] },
            { input: [[1]], expected: [1] }
        ],
        solution: {
            javascript: `function removeDuplicates(nums) {
    return [...new Set(nums)];
}`,
            python: `def remove_duplicates(nums):
    return list(dict.fromkeys(nums))`
        }
    },
    {
        id: 13,
        title: "Prime Number Check",
        difficulty: "easy",
        category: "Math",
        description: "Kiểm tra một số có phải số nguyên tố không (chỉ chia hết cho 1 và chính nó).",
        hint: "Kiểm tra từ 2 đến căn bậc 2 của n. Nếu n chia hết cho số nào trong khoảng này thì không phải nguyên tố.",
        examples: [
            { input: "n = 7", output: "true" },
            { input: "n = 4", output: "false" }
        ],
        starterCode: {
            javascript: `function isPrime(n) {
    // Viết code của bạn ở đây

}

// Test
console.log(isPrime(7));`,
            python: `def is_prime(n):
    # Viết code của bạn ở đây
    pass

# Test
print(is_prime(7))`
        },
        testCases: [
            { input: [7], expected: true },
            { input: [4], expected: false },
            { input: [2], expected: true },
            { input: [1], expected: false }
        ],
        solution: {
            javascript: `function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}`,
            python: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True`
        }
    },
    {
        id: 14,
        title: "Fibonacci Series",
        difficulty: "easy",
        category: "Math",
        description: "Trả về mảng chứa n số đầu tiên của dãy Fibonacci (0, 1, 1, 2, 3, 5, ...).",
        hint: "Dùng vòng lặp, mỗi số mới = tổng 2 số trước. Bắt đầu với [0, 1].",
        examples: [
            { input: "n = 7", output: "[0, 1, 1, 2, 3, 5, 8]" }
        ],
        starterCode: {
            javascript: `function fibonacci(n) {
    // Viết code của bạn ở đây

}

// Test
console.log(fibonacci(7));`,
            python: `def fibonacci(n):
    # Viết code của bạn ở đây
    pass

# Test
print(fibonacci(7))`
        },
        testCases: [
            { input: [7], expected: [0, 1, 1, 2, 3, 5, 8] },
            { input: [1], expected: [0] },
            { input: [2], expected: [0, 1] }
        ],
        solution: {
            javascript: `function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib;
}`,
            python: `def fibonacci(n):
    if n <= 0:
        return []
    if n == 1:
        return [0]
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib`
        }
    },
    {
        id: 15,
        title: "Factorial",
        difficulty: "easy",
        category: "Math",
        description: "Tính giai thừa của n (n! = 1 * 2 * 3 * ... * n).",
        hint: "Dùng vòng lặp từ 1 đến n, nhân dồn vào kết quả. Hoặc dùng đệ quy: n! = n * (n-1)!",
        examples: [
            { input: "n = 5", output: "120", explanation: "5! = 5*4*3*2*1 = 120" }
        ],
        starterCode: {
            javascript: `function factorial(n) {
    // Viết code của bạn ở đây

}

// Test
console.log(factorial(5));`,
            python: `def factorial(n):
    # Viết code của bạn ở đây
    pass

# Test
print(factorial(5))`
        },
        testCases: [
            { input: [5], expected: 120 },
            { input: [0], expected: 1 },
            { input: [1], expected: 1 },
            { input: [10], expected: 3628800 }
        ],
        solution: {
            javascript: `function factorial(n) {
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}`,
            python: `def factorial(n):
    if n <= 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result`
        }
    },
    {
        id: 16,
        title: "Even or Odd",
        difficulty: "easy",
        category: "Math",
        description: "Kiểm tra số chẵn hay lẻ. Trả về 'even' nếu chẵn, 'odd' nếu lẻ.",
        hint: "Dùng phép modulo: n % 2 === 0 là số chẵn.",
        examples: [
            { input: "n = 4", output: '"even"' },
            { input: "n = 7", output: '"odd"' }
        ],
        starterCode: {
            javascript: `function evenOrOdd(n) {
    // Viết code của bạn ở đây

}

// Test
console.log(evenOrOdd(4));`,
            python: `def even_or_odd(n):
    # Viết code của bạn ở đây
    pass

# Test
print(even_or_odd(4))`
        },
        testCases: [
            { input: [4], expected: "even" },
            { input: [7], expected: "odd" },
            { input: [0], expected: "even" }
        ],
        solution: {
            javascript: `function evenOrOdd(n) {
    return n % 2 === 0 ? "even" : "odd";
}`,
            python: `def even_or_odd(n):
    return "even" if n % 2 == 0 else "odd"`
        }
    },
    {
        id: 17,
        title: "Linear Search",
        difficulty: "easy",
        category: "Search",
        description: "Tìm kiếm tuyến tính: tìm vị trí của target trong mảng. Trả về -1 nếu không tìm thấy.",
        hint: "Duyệt tuần tự từ đầu đến cuối mảng, so sánh từng phần tử với target.",
        examples: [
            { input: "nums = [4, 2, 7, 1, 9], target = 7", output: "2" }
        ],
        starterCode: {
            javascript: `function linearSearch(nums, target) {
    // Viết code của bạn ở đây

}

// Test
console.log(linearSearch([4, 2, 7, 1, 9], 7));`,
            python: `def linear_search(nums, target):
    # Viết code của bạn ở đây
    pass

# Test
print(linear_search([4, 2, 7, 1, 9], 7))`
        },
        testCases: [
            { input: [[4, 2, 7, 1, 9], 7], expected: 2 },
            { input: [[4, 2, 7, 1, 9], 5], expected: -1 },
            { input: [[1], 1], expected: 0 }
        ],
        solution: {
            javascript: `function linearSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }
    return -1;
}`,
            python: `def linear_search(nums, target):
    for i, num in enumerate(nums):
        if num == target:
            return i
    return -1`
        }
    },
    {
        id: 18,
        title: "Bubble Sort",
        difficulty: "medium",
        category: "Sort",
        description: "Sắp xếp mảng bằng thuật toán nổi bọt (Bubble Sort).",
        hint: "So sánh và đổi chỗ các phần tử liền kề nếu sai thứ tự. Lặp lại cho đến khi không còn hoán đổi.",
        examples: [
            { input: "nums = [64, 34, 25, 12, 22, 11, 90]", output: "[11, 12, 22, 25, 34, 64, 90]" }
        ],
        starterCode: {
            javascript: `function bubbleSort(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));`,
            python: `def bubble_sort(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(bubble_sort([64, 34, 25, 12, 22, 11, 90]))`
        },
        testCases: [
            { input: [[64, 34, 25, 12, 22, 11, 90]], expected: [11, 12, 22, 25, 34, 64, 90] },
            { input: [[5, 1, 4, 2, 8]], expected: [1, 2, 4, 5, 8] },
            { input: [[1]], expected: [1] }
        ],
        solution: {
            javascript: `function bubbleSort(nums) {
    const arr = [...nums];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}`,
            python: `def bubble_sort(nums):
    arr = nums.copy()
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`
        }
    },
    {
        id: 19,
        title: "Count Character Occurrences",
        difficulty: "easy",
        category: "String",
        description: "Đếm số lần xuất hiện của một ký tự trong chuỗi.",
        hint: "Duyệt chuỗi và tăng biến đếm mỗi khi gặp ký tự cần tìm.",
        examples: [
            { input: 's = "hello", char = "l"', output: "2" }
        ],
        starterCode: {
            javascript: `function countChar(s, char) {
    // Viết code của bạn ở đây

}

// Test
console.log(countChar("hello", "l"));`,
            python: `def count_char(s, char):
    # Viết code của bạn ở đây
    pass

# Test
print(count_char("hello", "l"))`
        },
        testCases: [
            { input: ["hello", "l"], expected: 2 },
            { input: ["hello", "o"], expected: 1 },
            { input: ["hello", "x"], expected: 0 }
        ],
        solution: {
            javascript: `function countChar(s, char) {
    return s.split(char).length - 1;
}`,
            python: `def count_char(s, char):
    return s.count(char)`
        }
    },
    {
        id: 20,
        title: "First Non-Repeated Character",
        difficulty: "medium",
        category: "String",
        description: "Tìm ký tự đầu tiên không lặp lại trong chuỗi. Trả về null/None nếu không có.",
        hint: "Dùng bảng băm để lưu tần suất, sau đó duyệt lại chuỗi tìm ký tự có tần suất = 1.",
        examples: [
            { input: 's = "leetcode"', output: '"l"' },
            { input: 's = "aabb"', output: "null" }
        ],
        starterCode: {
            javascript: `function firstNonRepeated(s) {
    // Viết code của bạn ở đây

}

// Test
console.log(firstNonRepeated("leetcode"));`,
            python: `def first_non_repeated(s):
    # Viết code của bạn ở đây
    pass

# Test
print(first_non_repeated("leetcode"))`
        },
        testCases: [
            { input: ["leetcode"], expected: "l" },
            { input: ["loveleetcode"], expected: "v" },
            { input: ["aabb"], expected: null }
        ],
        solution: {
            javascript: `function firstNonRepeated(s) {
    const freq = {};
    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }
    for (const char of s) {
        if (freq[char] === 1) return char;
    }
    return null;
}`,
            python: `def first_non_repeated(s):
    freq = {}
    for char in s:
        freq[char] = freq.get(char, 0) + 1
    for char in s:
        if freq[char] == 1:
            return char
    return None`
        }
    },
    {
        id: 21,
        title: "Remove Whitespaces",
        difficulty: "easy",
        category: "String",
        description: "Xóa tất cả khoảng trắng trong chuỗi.",
        hint: "Duyệt chuỗi và nối các ký tự không phải khoảng trắng. Hoặc dùng replace/regex.",
        examples: [
            { input: 's = "hello world"', output: '"helloworld"' }
        ],
        starterCode: {
            javascript: `function removeWhitespaces(s) {
    // Viết code của bạn ở đây

}

// Test
console.log(removeWhitespaces("hello world"));`,
            python: `def remove_whitespaces(s):
    # Viết code của bạn ở đây
    pass

# Test
print(remove_whitespaces("hello world"))`
        },
        testCases: [
            { input: ["hello world"], expected: "helloworld" },
            { input: ["  a  b  c  "], expected: "abc" },
            { input: ["nospace"], expected: "nospace" }
        ],
        solution: {
            javascript: `function removeWhitespaces(s) {
    return s.replace(/\s/g, '');
}`,
            python: `def remove_whitespaces(s):
    return s.replace(" ", "")`
        }
    },
    {
        id: 22,
        title: "Contains Duplicate",
        difficulty: "easy",
        category: "Array",
        description: "Kiểm tra mảng có phần tử trùng không. Trả về true/false.",
        hint: "Dùng Set để lưu các phần tử đã gặp. Nếu kích thước Set < kích thước mảng thì có trùng.",
        examples: [
            { input: "nums = [1,2,3,1]", output: "true" },
            { input: "nums = [1,2,3,4]", output: "false" }
        ],
        starterCode: {
            javascript: `function containsDuplicate(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(containsDuplicate([1,2,3,1]));`,
            python: `def contains_duplicate(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(contains_duplicate([1,2,3,1]))`
        },
        testCases: [
            { input: [[1,2,3,1]], expected: true },
            { input: [[1,2,3,4]], expected: false },
            { input: [[1,1,1,3,3,4,3,2,4,2]], expected: true }
        ],
        solution: {
            javascript: `function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}`,
            python: `def contains_duplicate(nums):
    return len(set(nums)) != len(nums)`
        }
    },
    {
        id: 23,
        title: "Second Largest Number",
        difficulty: "easy",
        category: "Array",
        description: "Tìm số lớn thứ hai trong mảng. Trả về null/None nếu không có.",
        hint: "Duyệt mảng, lưu hai số lớn nhất. Hoặc loại bỏ trùng lặp, sắp xếp rồi lấy phần tử thứ 2 từ cuối.",
        examples: [
            { input: "nums = [1, 2, 3, 4, 5]", output: "4" }
        ],
        starterCode: {
            javascript: `function secondLargest(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(secondLargest([1, 2, 3, 4, 5]));`,
            python: `def second_largest(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(second_largest([1, 2, 3, 4, 5]))`
        },
        testCases: [
            { input: [[1, 2, 3, 4, 5]], expected: 4 },
            { input: [[5, 5, 5]], expected: null },
            { input: [[1, 2]], expected: 1 }
        ],
        solution: {
            javascript: `function secondLargest(nums) {
    const unique = [...new Set(nums)].sort((a, b) => b - a);
    return unique.length >= 2 ? unique[1] : null;
}`,
            python: `def second_largest(nums):
    unique = list(set(nums))
    if len(unique) < 2:
        return None
    unique.sort(reverse=True)
    return unique[1]`
        }
    },
    {
        id: 24,
        title: "Armstrong Number",
        difficulty: "medium",
        category: "Math",
        description: "Kiểm tra số Armstrong: số có tổng lũy thừa các chữ số bằng chính nó (VD: 153 = 1³ + 5³ + 3³).",
        hint: "Tách các chữ số, tính tổng lũy thừa bậc n (n = số chữ số), so sánh với số ban đầu.",
        examples: [
            { input: "n = 153", output: "true", explanation: "153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153" },
            { input: "n = 123", output: "false" }
        ],
        starterCode: {
            javascript: `function isArmstrong(n) {
    // Viết code của bạn ở đây

}

// Test
console.log(isArmstrong(153));`,
            python: `def is_armstrong(n):
    # Viết code của bạn ở đây
    pass

# Test
print(is_armstrong(153))`
        },
        testCases: [
            { input: [153], expected: true },
            { input: [370], expected: true },
            { input: [123], expected: false },
            { input: [9], expected: true }
        ],
        solution: {
            javascript: `function isArmstrong(n) {
    const digits = String(n).split('');
    const power = digits.length;
    const sum = digits.reduce((acc, d) => acc + Math.pow(Number(d), power), 0);
    return sum === n;
}`,
            python: `def is_armstrong(n):
    digits = str(n)
    power = len(digits)
    total = sum(int(d) ** power for d in digits)
    return total == n`
        }
    },
    {
        id: 25,
        title: "Reverse Words",
        difficulty: "medium",
        category: "String",
        description: "Đảo ngược thứ tự các từ trong chuỗi.",
        hint: "Tách chuỗi thành mảng từ, đảo ngược mảng, nối lại bằng khoảng trắng.",
        examples: [
            { input: 's = "hello world"', output: '"world hello"' }
        ],
        starterCode: {
            javascript: `function reverseWords(s) {
    // Viết code của bạn ở đây

}

// Test
console.log(reverseWords("hello world"));`,
            python: `def reverse_words(s):
    # Viết code của bạn ở đây
    pass

# Test
print(reverse_words("hello world"))`
        },
        testCases: [
            { input: ["hello world"], expected: "world hello" },
            { input: ["the sky is blue"], expected: "blue is sky the" },
            { input: ["a"], expected: "a" }
        ],
        solution: {
            javascript: `function reverseWords(s) {
    return s.split(' ').reverse().join(' ');
}`,
            python: `def reverse_words(s):
    return ' '.join(s.split()[::-1])`
        }
    },
    {
        id: 26,
        title: "Balanced Parentheses",
        difficulty: "medium",
        category: "Stack",
        description: "Kiểm tra dấu ngoặc trong biểu thức có cân bằng không. Hỗ trợ (), [], {}.",
        hint: "Dùng stack: gặp ngoặc mở thì push, gặp ngoặc đóng thì pop và kiểm tra có khớp không.",
        examples: [
            { input: 's = "()[]{}"', output: "true" },
            { input: 's = "([)]"', output: "false" }
        ],
        starterCode: {
            javascript: `function isBalanced(s) {
    // Viết code của bạn ở đây

}

// Test
console.log(isBalanced("()[]{}"));`,
            python: `def is_balanced(s):
    # Viết code của bạn ở đây
    pass

# Test
print(is_balanced("()[]{}"))`
        },
        testCases: [
            { input: ["()[]{}"], expected: true },
            { input: ["([)]"], expected: false },
            { input: ["{[]}"], expected: true },
            { input: ["("], expected: false }
        ],
        solution: {
            javascript: `function isBalanced(s) {
    const stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };
    for (const char of s) {
        if ('([{'.includes(char)) {
            stack.push(char);
        } else if (')]}}'.includes(char)) {
            if (stack.pop() !== pairs[char]) return false;
        }
    }
    return stack.length === 0;
}`,
            python: `def is_balanced(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for char in s:
        if char in '([{':
            stack.append(char)
        elif char in ')]}':
            if not stack or stack.pop() != pairs[char]:
                return False
    return len(stack) == 0`
        }
    },
    {
        id: 27,
        title: "Move Zeros to End",
        difficulty: "easy",
        category: "Array",
        description: "Di chuyển tất cả số 0 về cuối mảng, giữ nguyên thứ tự các số khác.",
        hint: "Dùng con trỏ để đẩy các phần tử khác 0 lên đầu, sau đó điền 0 vào cuối.",
        examples: [
            { input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" }
        ],
        starterCode: {
            javascript: `function moveZeros(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(moveZeros([0,1,0,3,12]));`,
            python: `def move_zeros(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(move_zeros([0,1,0,3,12]))`
        },
        testCases: [
            { input: [[0,1,0,3,12]], expected: [1,3,12,0,0] },
            { input: [[0]], expected: [0] },
            { input: [[1,2,3]], expected: [1,2,3] }
        ],
        solution: {
            javascript: `function moveZeros(nums) {
    const nonZeros = nums.filter(n => n !== 0);
    const zeros = nums.filter(n => n === 0);
    return [...nonZeros, ...zeros];
}`,
            python: `def move_zeros(nums):
    non_zeros = [n for n in nums if n != 0]
    zeros = [n for n in nums if n == 0]
    return non_zeros + zeros`
        }
    },
    {
        id: 28,
        title: "Maximum Subarray Sum",
        difficulty: "medium",
        category: "Array",
        description: "Tìm tổng lớn nhất của mảng con liên tiếp (Kadane's Algorithm).",
        hint: "Duyệt mảng, với mỗi phần tử: tổng hiện tại = max(phần tử, tổng trước + phần tử). Lưu max toàn cục.",
        examples: [
            { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "Mảng con [4,-1,2,1] có tổng = 6" }
        ],
        starterCode: {
            javascript: `function maxSubarraySum(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]));`,
            python: `def max_subarray_sum(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(max_subarray_sum([-2,1,-3,4,-1,2,1,-5,4]))`
        },
        testCases: [
            { input: [[-2,1,-3,4,-1,2,1,-5,4]], expected: 6 },
            { input: [[1]], expected: 1 },
            { input: [[5,4,-1,7,8]], expected: 23 }
        ],
        solution: {
            javascript: `function maxSubarraySum(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`,
            python: `def max_subarray_sum(nums):
    max_sum = current_sum = nums[0]
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum`
        }
    },
    {
        id: 29,
        title: "String to Integer (atoi)",
        difficulty: "medium",
        category: "String",
        description: "Chuyển chuỗi thành số nguyên. Bỏ qua khoảng trắng đầu, xử lý dấu +/-.",
        hint: "Bỏ khoảng trắng đầu, kiểm tra dấu, chuyển từng ký tự số thành số.",
        examples: [
            { input: 's = "42"', output: "42" },
            { input: 's = "   -42"', output: "-42" }
        ],
        starterCode: {
            javascript: `function myAtoi(s) {
    // Viết code của bạn ở đây

}

// Test
console.log(myAtoi("   -42"));`,
            python: `def my_atoi(s):
    # Viết code của bạn ở đây
    pass

# Test
print(my_atoi("   -42"))`
        },
        testCases: [
            { input: ["42"], expected: 42 },
            { input: ["   -42"], expected: -42 },
            { input: ["4193 with words"], expected: 4193 }
        ],
        solution: {
            javascript: `function myAtoi(s) {
    s = s.trim();
    if (!s) return 0;
    let sign = 1, i = 0;
    if (s[0] === '-' || s[0] === '+') {
        sign = s[0] === '-' ? -1 : 1;
        i++;
    }
    let result = 0;
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        i++;
    }
    return sign * result;
}`,
            python: `def my_atoi(s):
    s = s.strip()
    if not s:
        return 0
    sign = 1
    i = 0
    if s[0] in ['-', '+']:
        sign = -1 if s[0] == '-' else 1
        i += 1
    result = 0
    while i < len(s) and s[i].isdigit():
        result = result * 10 + int(s[i])
        i += 1
    return sign * result`
        }
    },
    {
        id: 30,
        title: "Number Palindrome",
        difficulty: "easy",
        category: "Math",
        description: "Kiểm tra số có phải palindrome không (VD: 121, 1221).",
        hint: "Đảo ngược số và so sánh với số ban đầu. Hoặc chuyển thành chuỗi rồi kiểm tra.",
        examples: [
            { input: "n = 121", output: "true" },
            { input: "n = -121", output: "false" }
        ],
        starterCode: {
            javascript: `function isNumberPalindrome(n) {
    // Viết code của bạn ở đây

}

// Test
console.log(isNumberPalindrome(121));`,
            python: `def is_number_palindrome(n):
    # Viết code của bạn ở đây
    pass

# Test
print(is_number_palindrome(121))`
        },
        testCases: [
            { input: [121], expected: true },
            { input: [-121], expected: false },
            { input: [10], expected: false },
            { input: [1221], expected: true }
        ],
        solution: {
            javascript: `function isNumberPalindrome(n) {
    if (n < 0) return false;
    const str = String(n);
    return str === str.split('').reverse().join('');
}`,
            python: `def is_number_palindrome(n):
    if n < 0:
        return False
    return str(n) == str(n)[::-1]`
        }
    },
    {
        id: 31,
        title: "Selection Sort",
        difficulty: "medium",
        category: "Sort",
        description: "Sắp xếp mảng bằng thuật toán Selection Sort (sắp xếp chọn).",
        hint: "Tìm phần tử nhỏ nhất trong phần chưa sắp xếp, đổi chỗ với phần tử đầu tiên của phần chưa sắp xếp.",
        examples: [
            { input: "nums = [64, 25, 12, 22, 11]", output: "[11, 12, 22, 25, 64]" }
        ],
        starterCode: {
            javascript: `function selectionSort(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(selectionSort([64, 25, 12, 22, 11]));`,
            python: `def selection_sort(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(selection_sort([64, 25, 12, 22, 11]))`
        },
        testCases: [
            { input: [[64, 25, 12, 22, 11]], expected: [11, 12, 22, 25, 64] },
            { input: [[5, 2, 9, 1, 7]], expected: [1, 2, 5, 7, 9] },
            { input: [[1]], expected: [1] }
        ],
        solution: {
            javascript: `function selectionSort(nums) {
    const arr = [...nums];
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}`,
            python: `def selection_sort(nums):
    arr = nums.copy()
    for i in range(len(arr) - 1):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`
        }
    },
    {
        id: 32,
        title: "Insertion Sort",
        difficulty: "medium",
        category: "Sort",
        description: "Sắp xếp mảng bằng thuật toán Insertion Sort (sắp xếp chèn).",
        hint: "Duyệt từ trái sang phải, chèn từng phần tử vào vị trí đúng trong phần đã sắp xếp bên trái.",
        examples: [
            { input: "nums = [12, 11, 13, 5, 6]", output: "[5, 6, 11, 12, 13]" }
        ],
        starterCode: {
            javascript: `function insertionSort(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(insertionSort([12, 11, 13, 5, 6]));`,
            python: `def insertion_sort(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(insertion_sort([12, 11, 13, 5, 6]))`
        },
        testCases: [
            { input: [[12, 11, 13, 5, 6]], expected: [5, 6, 11, 12, 13] },
            { input: [[5, 2, 4, 6, 1, 3]], expected: [1, 2, 3, 4, 5, 6] },
            { input: [[1]], expected: [1] }
        ],
        solution: {
            javascript: `function insertionSort(nums) {
    const arr = [...nums];
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}`,
            python: `def insertion_sort(nums):
    arr = nums.copy()
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr`
        }
    },
    {
        id: 33,
        title: "String Rotation Check",
        difficulty: "medium",
        category: "String",
        description: "Kiểm tra chuỗi s2 có phải là phép xoay của chuỗi s1 không (VD: 'waterbottle' xoay thành 'erbottlewat').",
        hint: "Nối s1 với chính nó (s1+s1), sau đó kiểm tra s2 có phải là chuỗi con của kết quả không.",
        examples: [
            { input: 's1 = "waterbottle", s2 = "erbottlewat"', output: "true" },
            { input: 's1 = "hello", s2 = "llohe"', output: "true" }
        ],
        starterCode: {
            javascript: `function isRotation(s1, s2) {
    // Viết code của bạn ở đây

}

// Test
console.log(isRotation("waterbottle", "erbottlewat"));`,
            python: `def is_rotation(s1, s2):
    # Viết code của bạn ở đây
    pass

# Test
print(is_rotation("waterbottle", "erbottlewat"))`
        },
        testCases: [
            { input: ["waterbottle", "erbottlewat"], expected: true },
            { input: ["hello", "llohe"], expected: true },
            { input: ["hello", "world"], expected: false }
        ],
        solution: {
            javascript: `function isRotation(s1, s2) {
    if (s1.length !== s2.length) return false;
    return (s1 + s1).includes(s2);
}`,
            python: `def is_rotation(s1, s2):
    if len(s1) != len(s2):
        return False
    return s2 in (s1 + s1)`
        }
    },
    {
        id: 34,
        title: "Majority Element",
        difficulty: "medium",
        category: "Array",
        description: "Tìm phần tử xuất hiện nhiều hơn n/2 lần trong mảng (majority element).",
        hint: "Dùng bảng băm đếm tần suất, hoặc dùng thuật toán Boyer-Moore Voting.",
        examples: [
            { input: "nums = [3, 2, 3]", output: "3" },
            { input: "nums = [2, 2, 1, 1, 1, 2, 2]", output: "2" }
        ],
        starterCode: {
            javascript: `function majorityElement(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(majorityElement([3, 2, 3]));`,
            python: `def majority_element(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(majority_element([3, 2, 3]))`
        },
        testCases: [
            { input: [[3, 2, 3]], expected: 3 },
            { input: [[2, 2, 1, 1, 1, 2, 2]], expected: 2 },
            { input: [[1]], expected: 1 }
        ],
        solution: {
            javascript: `function majorityElement(nums) {
    let candidate = nums[0], count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}`,
            python: `def majority_element(nums):
    candidate, count = nums[0], 1
    for num in nums[1:]:
        if count == 0:
            candidate, count = num, 1
        elif num == candidate:
            count += 1
        else:
            count -= 1
    return candidate`
        }
    },
    {
        id: 35,
        title: "First Repeated Character",
        difficulty: "easy",
        category: "String",
        description: "Tìm ký tự đầu tiên bị lặp lại trong chuỗi. Trả về null/None nếu không có.",
        hint: "Dùng Set để lưu các ký tự đã gặp. Trả về ngay khi gặp ký tự đã có trong Set.",
        examples: [
            { input: 's = "abcabc"', output: '"a"' },
            { input: 's = "abc"', output: "null" }
        ],
        starterCode: {
            javascript: `function firstRepeated(s) {
    // Viết code của bạn ở đây

}

// Test
console.log(firstRepeated("abcabc"));`,
            python: `def first_repeated(s):
    # Viết code của bạn ở đây
    pass

# Test
print(first_repeated("abcabc"))`
        },
        testCases: [
            { input: ["abcabc"], expected: "a" },
            { input: ["abcdef"], expected: null },
            { input: ["aabbcc"], expected: "a" }
        ],
        solution: {
            javascript: `function firstRepeated(s) {
    const seen = new Set();
    for (const char of s) {
        if (seen.has(char)) return char;
        seen.add(char);
    }
    return null;
}`,
            python: `def first_repeated(s):
    seen = set()
    for char in s:
        if char in seen:
            return char
        seen.add(char)
    return None`
        }
    },
    {
        id: 36,
        title: "Sort Array of 0s, 1s, 2s",
        difficulty: "medium",
        category: "Array",
        description: "Sắp xếp mảng chỉ gồm các số 0, 1, 2 (Dutch National Flag Problem).",
        hint: "Dùng ba con trỏ: low, mid, high. Đổi chỗ để đưa 0 về đầu, 2 về cuối.",
        examples: [
            { input: "nums = [2, 0, 2, 1, 1, 0]", output: "[0, 0, 1, 1, 2, 2]" }
        ],
        starterCode: {
            javascript: `function sortColors(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(sortColors([2, 0, 2, 1, 1, 0]));`,
            python: `def sort_colors(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(sort_colors([2, 0, 2, 1, 1, 0]))`
        },
        testCases: [
            { input: [[2, 0, 2, 1, 1, 0]], expected: [0, 0, 1, 1, 2, 2] },
            { input: [[2, 0, 1]], expected: [0, 1, 2] },
            { input: [[0]], expected: [0] }
        ],
        solution: {
            javascript: `function sortColors(nums) {
    const arr = [...nums];
    let low = 0, mid = 0, high = arr.length - 1;
    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++; mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
}`,
            python: `def sort_colors(nums):
    arr = nums.copy()
    low, mid, high = 0, 0, len(arr) - 1
    while mid <= high:
        if arr[mid] == 0:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1
            mid += 1
        elif arr[mid] == 1:
            mid += 1
        else:
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1
    return arr`
        }
    },
    {
        id: 37,
        title: "Intersection of Two Arrays",
        difficulty: "easy",
        category: "Array",
        description: "Tìm giao của hai mảng (các phần tử xuất hiện ở cả hai mảng).",
        hint: "Dùng Set để lưu phần tử mảng thứ nhất, sau đó lọc mảng thứ hai.",
        examples: [
            { input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2]" }
        ],
        starterCode: {
            javascript: `function intersection(nums1, nums2) {
    // Viết code của bạn ở đây

}

// Test
console.log(intersection([1,2,2,1], [2,2]));`,
            python: `def intersection(nums1, nums2):
    # Viết code của bạn ở đây
    pass

# Test
print(intersection([1,2,2,1], [2,2]))`
        },
        testCases: [
            { input: [[1,2,2,1], [2,2]], expected: [2] },
            { input: [[4,9,5], [9,4,9,8,4]], expected: [4, 9] },
            { input: [[1,2,3], [4,5,6]], expected: [] }
        ],
        solution: {
            javascript: `function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = new Set();
    for (const num of nums2) {
        if (set1.has(num)) result.add(num);
    }
    return [...result];
}`,
            python: `def intersection(nums1, nums2):
    return list(set(nums1) & set(nums2))`
        }
    },
    {
        id: 38,
        title: "Union of Two Arrays",
        difficulty: "easy",
        category: "Array",
        description: "Tìm hợp của hai mảng (tất cả phần tử không trùng lặp từ cả hai mảng).",
        hint: "Dùng Set để lưu tất cả phần tử từ cả hai mảng.",
        examples: [
            { input: "nums1 = [1,2,3], nums2 = [2,3,4]", output: "[1,2,3,4]" }
        ],
        starterCode: {
            javascript: `function union(nums1, nums2) {
    // Viết code của bạn ở đây

}

// Test
console.log(union([1,2,3], [2,3,4]));`,
            python: `def union(nums1, nums2):
    # Viết code của bạn ở đây
    pass

# Test
print(union([1,2,3], [2,3,4]))`
        },
        testCases: [
            { input: [[1,2,3], [2,3,4]], expected: [1,2,3,4] },
            { input: [[1,1,1], [2,2,2]], expected: [1,2] },
            { input: [[], [1,2]], expected: [1,2] }
        ],
        solution: {
            javascript: `function union(nums1, nums2) {
    return [...new Set([...nums1, ...nums2])];
}`,
            python: `def union(nums1, nums2):
    return list(set(nums1) | set(nums2))`
        }
    },
    {
        id: 39,
        title: "Kth Largest Element",
        difficulty: "medium",
        category: "Array",
        description: "Tìm phần tử lớn thứ k trong mảng (k = 1 là lớn nhất).",
        hint: "Sắp xếp mảng giảm dần rồi lấy phần tử thứ k-1. Hoặc dùng heap.",
        examples: [
            { input: "nums = [3,2,1,5,6,4], k = 2", output: "5" }
        ],
        starterCode: {
            javascript: `function kthLargest(nums, k) {
    // Viết code của bạn ở đây

}

// Test
console.log(kthLargest([3,2,1,5,6,4], 2));`,
            python: `def kth_largest(nums, k):
    # Viết code của bạn ở đây
    pass

# Test
print(kth_largest([3,2,1,5,6,4], 2))`
        },
        testCases: [
            { input: [[3,2,1,5,6,4], 2], expected: 5 },
            { input: [[3,2,3,1,2,4,5,5,6], 4], expected: 4 },
            { input: [[1], 1], expected: 1 }
        ],
        solution: {
            javascript: `function kthLargest(nums, k) {
    return nums.sort((a, b) => b - a)[k - 1];
}`,
            python: `def kth_largest(nums, k):
    return sorted(nums, reverse=True)[k - 1]`
        }
    },
    {
        id: 40,
        title: "Kth Smallest Element",
        difficulty: "medium",
        category: "Array",
        description: "Tìm phần tử nhỏ thứ k trong mảng (k = 1 là nhỏ nhất).",
        hint: "Sắp xếp mảng tăng dần rồi lấy phần tử thứ k-1.",
        examples: [
            { input: "nums = [7,10,4,3,20,15], k = 3", output: "7" }
        ],
        starterCode: {
            javascript: `function kthSmallest(nums, k) {
    // Viết code của bạn ở đây

}

// Test
console.log(kthSmallest([7,10,4,3,20,15], 3));`,
            python: `def kth_smallest(nums, k):
    # Viết code của bạn ở đây
    pass

# Test
print(kth_smallest([7,10,4,3,20,15], 3))`
        },
        testCases: [
            { input: [[7,10,4,3,20,15], 3], expected: 7 },
            { input: [[7,10,4,3,20,15], 1], expected: 3 },
            { input: [[1], 1], expected: 1 }
        ],
        solution: {
            javascript: `function kthSmallest(nums, k) {
    return nums.sort((a, b) => a - b)[k - 1];
}`,
            python: `def kth_smallest(nums, k):
    return sorted(nums)[k - 1]`
        }
    },
    {
        id: 41,
        title: "Check Digits Only",
        difficulty: "easy",
        category: "String",
        description: "Kiểm tra chuỗi chỉ chứa các ký tự số (0-9).",
        hint: "Duyệt từng ký tự kiểm tra có nằm trong '0'-'9' không. Hoặc dùng regex.",
        examples: [
            { input: 's = "12345"', output: "true" },
            { input: 's = "123a5"', output: "false" }
        ],
        starterCode: {
            javascript: `function isDigitsOnly(s) {
    // Viết code của bạn ở đây

}

// Test
console.log(isDigitsOnly("12345"));`,
            python: `def is_digits_only(s):
    # Viết code của bạn ở đây
    pass

# Test
print(is_digits_only("12345"))`
        },
        testCases: [
            { input: ["12345"], expected: true },
            { input: ["123a5"], expected: false },
            { input: [""], expected: false }
        ],
        solution: {
            javascript: `function isDigitsOnly(s) {
    if (s.length === 0) return false;
    return /^\\d+$/.test(s);
}`,
            python: `def is_digits_only(s):
    return s.isdigit() if s else False`
        }
    },
    {
        id: 42,
        title: "Length of Last Word",
        difficulty: "easy",
        category: "String",
        description: "Tìm độ dài của từ cuối cùng trong chuỗi.",
        hint: "Cắt khoảng trắng thừa, tách theo khoảng trắng, lấy độ dài từ cuối.",
        examples: [
            { input: 's = "Hello World"', output: "5" },
            { input: 's = "   fly me   to   the moon  "', output: "4" }
        ],
        starterCode: {
            javascript: `function lengthOfLastWord(s) {
    // Viết code của bạn ở đây

}

// Test
console.log(lengthOfLastWord("Hello World"));`,
            python: `def length_of_last_word(s):
    # Viết code của bạn ở đây
    pass

# Test
print(length_of_last_word("Hello World"))`
        },
        testCases: [
            { input: ["Hello World"], expected: 5 },
            { input: ["   fly me   to   the moon  "], expected: 4 },
            { input: ["a"], expected: 1 }
        ],
        solution: {
            javascript: `function lengthOfLastWord(s) {
    const words = s.trim().split(' ');
    return words[words.length - 1].length;
}`,
            python: `def length_of_last_word(s):
    return len(s.strip().split()[-1])`
        }
    },
    {
        id: 43,
        title: "Generate All Substrings",
        difficulty: "medium",
        category: "String",
        description: "Sinh tất cả các chuỗi con của một chuỗi. Trả về mảng các chuỗi con.",
        hint: "Dùng hai vòng lặp: vòng ngoài chọn điểm bắt đầu, vòng trong chọn điểm kết thúc.",
        examples: [
            { input: 's = "abc"', output: '["a", "ab", "abc", "b", "bc", "c"]' }
        ],
        starterCode: {
            javascript: `function allSubstrings(s) {
    // Viết code của bạn ở đây

}

// Test
console.log(allSubstrings("abc"));`,
            python: `def all_substrings(s):
    # Viết code của bạn ở đây
    pass

# Test
print(all_substrings("abc"))`
        },
        testCases: [
            { input: ["abc"], expected: ["a", "ab", "abc", "b", "bc", "c"] },
            { input: ["ab"], expected: ["a", "ab", "b"] },
            { input: ["a"], expected: ["a"] }
        ],
        solution: {
            javascript: `function allSubstrings(s) {
    const result = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            result.push(s.slice(i, j));
        }
    }
    return result;
}`,
            python: `def all_substrings(s):
    result = []
    for i in range(len(s)):
        for j in range(i + 1, len(s) + 1):
            result.append(s[i:j])
    return result`
        }
    },
    {
        id: 44,
        title: "Sum of Array Elements",
        difficulty: "easy",
        category: "Array",
        description: "Tính tổng tất cả các phần tử trong mảng.",
        hint: "Dùng vòng lặp cộng dồn, hoặc dùng reduce trong JS, sum trong Python.",
        examples: [
            { input: "nums = [1, 2, 3, 4, 5]", output: "15" }
        ],
        starterCode: {
            javascript: `function sumArray(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(sumArray([1, 2, 3, 4, 5]));`,
            python: `def sum_array(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(sum_array([1, 2, 3, 4, 5]))`
        },
        testCases: [
            { input: [[1, 2, 3, 4, 5]], expected: 15 },
            { input: [[10, -5, 3]], expected: 8 },
            { input: [[0]], expected: 0 }
        ],
        solution: {
            javascript: `function sumArray(nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}`,
            python: `def sum_array(nums):
    return sum(nums)`
        }
    },
    {
        id: 45,
        title: "Product of Array Elements",
        difficulty: "easy",
        category: "Array",
        description: "Tính tích của tất cả các phần tử trong mảng.",
        hint: "Dùng vòng lặp nhân dồn, hoặc dùng reduce trong JS.",
        examples: [
            { input: "nums = [1, 2, 3, 4]", output: "24" }
        ],
        starterCode: {
            javascript: `function productArray(nums) {
    // Viết code của bạn ở đây

}

// Test
console.log(productArray([1, 2, 3, 4]));`,
            python: `def product_array(nums):
    # Viết code của bạn ở đây
    pass

# Test
print(product_array([1, 2, 3, 4]))`
        },
        testCases: [
            { input: [[1, 2, 3, 4]], expected: 24 },
            { input: [[2, 5, 3]], expected: 30 },
            { input: [[1, 0, 3]], expected: 0 }
        ],
        solution: {
            javascript: `function productArray(nums) {
    return nums.reduce((prod, num) => prod * num, 1);
}`,
            python: `def product_array(nums):
    result = 1
    for num in nums:
        result *= num
    return result`
        }
    },
    {
        id: 46,
        title: "Count Vowels and Consonants",
        difficulty: "easy",
        category: "String",
        description: "Đếm số nguyên âm và phụ âm trong chuỗi. Trả về object với vowels và consonants.",
        hint: "Duyệt chuỗi, kiểm tra mỗi ký tự có phải nguyên âm (a,e,i,o,u) hay phụ âm.",
        examples: [
            { input: 's = "hello"', output: '{vowels: 2, consonants: 3}' }
        ],
        starterCode: {
            javascript: `function countVowelsConsonants(s) {
    // Viết code của bạn ở đây

}

// Test
console.log(countVowelsConsonants("hello"));`,
            python: `def count_vowels_consonants(s):
    # Viết code của bạn ở đây
    pass

# Test
print(count_vowels_consonants("hello"))`
        },
        testCases: [
            { input: ["hello"], expected: {vowels: 2, consonants: 3} },
            { input: ["aeiou"], expected: {vowels: 5, consonants: 0} },
            { input: ["xyz"], expected: {vowels: 0, consonants: 3} }
        ],
        solution: {
            javascript: `function countVowelsConsonants(s) {
    const vowels = 'aeiouAEIOU';
    let v = 0, c = 0;
    for (const char of s.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            vowels.includes(char) ? v++ : c++;
        }
    }
    return {vowels: v, consonants: c};
}`,
            python: `def count_vowels_consonants(s):
    vowels = 'aeiouAEIOU'
    v = c = 0
    for char in s.lower():
        if char.isalpha():
            if char in vowels:
                v += 1
            else:
                c += 1
    return {"vowels": v, "consonants": c}`
        }
    },
    {
        id: 47,
        title: "GCD of Two Numbers",
        difficulty: "easy",
        category: "Math",
        description: "Tìm ước chung lớn nhất (GCD) của hai số nguyên dương.",
        hint: "Dùng thuật toán Euclid: GCD(a,b) = GCD(b, a%b) cho đến khi b = 0.",
        examples: [
            { input: "a = 12, b = 8", output: "4" },
            { input: "a = 17, b = 5", output: "1" }
        ],
        starterCode: {
            javascript: `function gcd(a, b) {
    // Viết code của bạn ở đây

}

// Test
console.log(gcd(12, 8));`,
            python: `def gcd(a, b):
    # Viết code của bạn ở đây
    pass

# Test
print(gcd(12, 8))`
        },
        testCases: [
            { input: [12, 8], expected: 4 },
            { input: [17, 5], expected: 1 },
            { input: [100, 25], expected: 25 }
        ],
        solution: {
            javascript: `function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}`,
            python: `def gcd(a, b):
    while b:
        a, b = b, a % b
    return a`
        }
    },
    {
        id: 48,
        title: "LCM of Two Numbers",
        difficulty: "easy",
        category: "Math",
        description: "Tìm bội chung nhỏ nhất (LCM) của hai số nguyên dương.",
        hint: "LCM(a,b) = (a * b) / GCD(a,b). Tính GCD trước rồi áp dụng công thức.",
        examples: [
            { input: "a = 4, b = 6", output: "12" }
        ],
        starterCode: {
            javascript: `function lcm(a, b) {
    // Viết code của bạn ở đây

}

// Test
console.log(lcm(4, 6));`,
            python: `def lcm(a, b):
    # Viết code của bạn ở đây
    pass

# Test
print(lcm(4, 6))`
        },
        testCases: [
            { input: [4, 6], expected: 12 },
            { input: [3, 5], expected: 15 },
            { input: [12, 18], expected: 36 }
        ],
        solution: {
            javascript: `function lcm(a, b) {
    function gcd(x, y) {
        while (y !== 0) [x, y] = [y, x % y];
        return x;
    }
    return (a * b) / gcd(a, b);
}`,
            python: `def lcm(a, b):
    def gcd(x, y):
        while y:
            x, y = y, x % y
        return x
    return (a * b) // gcd(a, b)`
        }
    },
    {
        id: 49,
        title: "Power of Two",
        difficulty: "easy",
        category: "Math",
        description: "Kiểm tra một số có phải lũy thừa của 2 không (1, 2, 4, 8, 16, ...).",
        hint: "Số là lũy thừa của 2 nếu n > 0 và n & (n-1) === 0. Hoặc chia liên tục cho 2.",
        examples: [
            { input: "n = 16", output: "true" },
            { input: "n = 18", output: "false" }
        ],
        starterCode: {
            javascript: `function isPowerOfTwo(n) {
    // Viết code của bạn ở đây

}

// Test
console.log(isPowerOfTwo(16));`,
            python: `def is_power_of_two(n):
    # Viết code của bạn ở đây
    pass

# Test
print(is_power_of_two(16))`
        },
        testCases: [
            { input: [16], expected: true },
            { input: [18], expected: false },
            { input: [1], expected: true },
            { input: [0], expected: false }
        ],
        solution: {
            javascript: `function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}`,
            python: `def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0`
        }
    },
    {
        id: 50,
        title: "Longest Palindromic Substring",
        difficulty: "hard",
        category: "String",
        description: "Tìm chuỗi con dài nhất là palindrome trong chuỗi cho trước.",
        hint: "Với mỗi vị trí, mở rộng ra hai bên để tìm palindrome dài nhất (xét cả palindrome lẻ và chẵn).",
        examples: [
            { input: 's = "babad"', output: '"bab"', explanation: '"aba" cũng là đáp án đúng' },
            { input: 's = "cbbd"', output: '"bb"' }
        ],
        starterCode: {
            javascript: `function longestPalindrome(s) {
    // Viết code của bạn ở đây

}

// Test
console.log(longestPalindrome("babad"));`,
            python: `def longest_palindrome(s):
    # Viết code của bạn ở đây
    pass

# Test
print(longest_palindrome("babad"))`
        },
        testCases: [
            { input: ["babad"], expected: "bab" },
            { input: ["cbbd"], expected: "bb" },
            { input: ["a"], expected: "a" }
        ],
        solution: {
            javascript: `function longestPalindrome(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        // Odd length
        let l = i, r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > result.length) result = s.slice(l, r + 1);
            l--; r++;
        }
        // Even length
        l = i; r = i + 1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > result.length) result = s.slice(l, r + 1);
            l--; r++;
        }
    }
    return result;
}`,
            python: `def longest_palindrome(s):
    result = ''
    for i in range(len(s)):
        # Odd length
        l, r = i, i
        while l >= 0 and r < len(s) and s[l] == s[r]:
            if r - l + 1 > len(result):
                result = s[l:r+1]
            l -= 1
            r += 1
        # Even length
        l, r = i, i + 1
        while l >= 0 and r < len(s) and s[l] == s[r]:
            if r - l + 1 > len(result):
                result = s[l:r+1]
            l -= 1
            r += 1
    return result`
        }
    },
    {
        id: 51,
        title: "Extract Barcode from String",
        difficulty: "medium",
        category: "String/Regex",
        description: "Trích xuất mã vạch (barcode) từ chuỗi lộn xộn. Mã vạch là chuỗi số có độ dài từ 8-14 ký tự liên tiếp.",
        hint: "Dùng regex để tìm chuỗi số liên tiếp có độ dài 8-14. Pattern: /\\d{8,14}/g",
        examples: [
            { input: 's = "abc123456789012xyz"', output: '["123456789012"]' },
            { input: 's = "test12345678data87654321end"', output: '["12345678", "87654321"]' }
        ],
        starterCode: {
            javascript: `function extractBarcodes(s) {
    // Viết code của bạn ở đây
    // Tìm tất cả chuỗi số có 8-14 chữ số

}

// Test
console.log(extractBarcodes("abc123456789012xyz"));`,
            python: `def extract_barcodes(s):
    # Viết code của bạn ở đây
    # Tìm tất cả chuỗi số có 8-14 chữ số
    pass

# Test
print(extract_barcodes("abc123456789012xyz"))`
        },
        testCases: [
            { input: ["abc123456789012xyz"], expected: ["123456789012"] },
            { input: ["test12345678data87654321end"], expected: ["12345678", "87654321"] },
            { input: ["nobarcode"], expected: [] }
        ],
        solution: {
            javascript: `function extractBarcodes(s) {
    const matches = s.match(/\\d{8,14}/g);
    return matches || [];
}`,
            python: `def extract_barcodes(s):
    import re
    return re.findall(r'\\d{8,14}', s)`
        }
    },
    {
        id: 52,
        title: "Extract EAN-13 Barcode",
        difficulty: "medium",
        category: "String/Regex",
        description: "Trích xuất mã vạch EAN-13 (đúng 13 chữ số) từ chuỗi lộn xộn.",
        hint: "EAN-13 có đúng 13 chữ số. Dùng regex: /\\b\\d{13}\\b/g hoặc tìm chuỗi 13 số không nằm trong chuỗi số dài hơn.",
        examples: [
            { input: 's = "Product: 4006381333931 - Price: $10"', output: '["4006381333931"]' },
            { input: 's = "ID:1234567890123,Code:9876543210987"', output: '["1234567890123", "9876543210987"]' }
        ],
        starterCode: {
            javascript: `function extractEAN13(s) {
    // Viết code của bạn ở đây
    // Tìm mã EAN-13 (đúng 13 chữ số)

}

// Test
console.log(extractEAN13("Product: 4006381333931 - Price: $10"));`,
            python: `def extract_ean13(s):
    # Viết code của bạn ở đây
    # Tìm mã EAN-13 (đúng 13 chữ số)
    pass

# Test
print(extract_ean13("Product: 4006381333931 - Price: $10"))`
        },
        testCases: [
            { input: ["Product: 4006381333931 - Price: $10"], expected: ["4006381333931"] },
            { input: ["ID:1234567890123,Code:9876543210987"], expected: ["1234567890123", "9876543210987"] },
            { input: ["short12345"], expected: [] }
        ],
        solution: {
            javascript: `function extractEAN13(s) {
    const matches = s.match(/(?<!\\d)\\d{13}(?!\\d)/g);
    return matches || [];
}`,
            python: `def extract_ean13(s):
    import re
    return re.findall(r'(?<!\\d)\\d{13}(?!\\d)', s)`
        }
    },
    {
        id: 53,
        title: "Extract Code128 Pattern",
        difficulty: "medium",
        category: "String/Regex",
        description: "Trích xuất mã Code128 từ chuỗi. Code128 thường bắt đầu bằng ký tự đặc biệt và chứa chữ + số. Tìm pattern dạng [A-Z0-9-]{6,20}.",
        hint: "Dùng regex để tìm chuỗi gồm chữ in hoa, số và dấu gạch ngang, độ dài 6-20.",
        examples: [
            { input: 's = "scan:ABC-123456 done"', output: '["ABC-123456"]' },
            { input: 's = "data PROD-001 and ITEM-999-XL here"', output: '["PROD-001", "ITEM-999-XL"]' }
        ],
        starterCode: {
            javascript: `function extractCode128(s) {
    // Viết code của bạn ở đây
    // Tìm pattern [A-Z0-9-] độ dài 6-20

}

// Test
console.log(extractCode128("scan:ABC-123456 done"));`,
            python: `def extract_code128(s):
    # Viết code của bạn ở đây
    # Tìm pattern [A-Z0-9-] độ dài 6-20
    pass

# Test
print(extract_code128("scan:ABC-123456 done"))`
        },
        testCases: [
            { input: ["scan:ABC-123456 done"], expected: ["ABC-123456"] },
            { input: ["data PROD-001 and ITEM-999-XL here"], expected: ["PROD-001", "ITEM-999-XL"] },
            { input: ["no code here"], expected: [] }
        ],
        solution: {
            javascript: `function extractCode128(s) {
    const matches = s.match(/[A-Z][A-Z0-9-]{5,19}/g);
    return matches || [];
}`,
            python: `def extract_code128(s):
    import re
    return re.findall(r'[A-Z][A-Z0-9-]{5,19}', s)`
        }
    },
    {
        id: 54,
        title: "Extract Serial Number",
        difficulty: "easy",
        category: "String/Regex",
        description: "Trích xuất số serial từ chuỗi. Serial có format: 2-3 chữ cái + 6-10 số (VD: SN123456, ABC1234567890).",
        hint: "Dùng regex: /[A-Z]{2,3}\\d{6,10}/g",
        examples: [
            { input: 's = "Device SN123456789 registered"', output: '["SN123456789"]' },
            { input: 's = "Items: ABC123456, XYZ9876543210"', output: '["ABC123456", "XYZ9876543210"]' }
        ],
        starterCode: {
            javascript: `function extractSerialNumbers(s) {
    // Viết code của bạn ở đây
    // Format: 2-3 chữ + 6-10 số

}

// Test
console.log(extractSerialNumbers("Device SN123456789 registered"));`,
            python: `def extract_serial_numbers(s):
    # Viết code của bạn ở đây
    # Format: 2-3 chữ + 6-10 số
    pass

# Test
print(extract_serial_numbers("Device SN123456789 registered"))`
        },
        testCases: [
            { input: ["Device SN123456789 registered"], expected: ["SN123456789"] },
            { input: ["Items: ABC123456, XYZ9876543210"], expected: ["ABC123456", "XYZ9876543210"] },
            { input: ["no serial"], expected: [] }
        ],
        solution: {
            javascript: `function extractSerialNumbers(s) {
    const matches = s.match(/[A-Z]{2,3}\\d{6,10}/g);
    return matches || [];
}`,
            python: `def extract_serial_numbers(s):
    import re
    return re.findall(r'[A-Z]{2,3}\\d{6,10}', s)`
        }
    },
    {
        id: 55,
        title: "Extract UPC-A Barcode",
        difficulty: "medium",
        category: "String/Regex",
        description: "Trích xuất mã vạch UPC-A (đúng 12 chữ số) từ chuỗi lộn xộn.",
        hint: "UPC-A có đúng 12 chữ số. Dùng regex với negative lookbehind/lookahead để tránh match số dài hơn.",
        examples: [
            { input: 's = "UPC: 012345678905 - valid"', output: '["012345678905"]' },
            { input: 's = "codes:123456789012,098765432109"', output: '["123456789012", "098765432109"]' }
        ],
        starterCode: {
            javascript: `function extractUPCA(s) {
    // Viết code của bạn ở đây
    // Tìm UPC-A (đúng 12 chữ số)

}

// Test
console.log(extractUPCA("UPC: 012345678905 - valid"));`,
            python: `def extract_upca(s):
    # Viết code của bạn ở đây
    # Tìm UPC-A (đúng 12 chữ số)
    pass

# Test
print(extract_upca("UPC: 012345678905 - valid"))`
        },
        testCases: [
            { input: ["UPC: 012345678905 - valid"], expected: ["012345678905"] },
            { input: ["codes:123456789012,098765432109"], expected: ["123456789012", "098765432109"] },
            { input: ["short1234"], expected: [] }
        ],
        solution: {
            javascript: `function extractUPCA(s) {
    const matches = s.match(/(?<!\\d)\\d{12}(?!\\d)/g);
    return matches || [];
}`,
            python: `def extract_upca(s):
    import re
    return re.findall(r'(?<!\\d)\\d{12}(?!\\d)', s)`
        }
    },
    {
        id: 56,
        title: "Extract QR Code Data Pattern",
        difficulty: "medium",
        category: "String/Regex",
        description: "Trích xuất dữ liệu QR Code từ chuỗi. QR data thường nằm trong dấu ngoặc vuông [...] hoặc có prefix 'QR:' hoặc 'DATA:'.",
        hint: "Dùng regex để tìm nội dung trong [...] hoặc sau QR:/DATA:",
        examples: [
            { input: 's = "Scan result: [PRODUCT-123-ABC] ok"', output: '["PRODUCT-123-ABC"]' },
            { input: 's = "QR:HelloWorld DATA:Test123"', output: '["HelloWorld", "Test123"]' }
        ],
        starterCode: {
            javascript: `function extractQRData(s) {
    // Viết code của bạn ở đây
    // Tìm data trong [...] hoặc sau QR:/DATA:

}

// Test
console.log(extractQRData("Scan result: [PRODUCT-123-ABC] ok"));`,
            python: `def extract_qr_data(s):
    # Viết code của bạn ở đây
    # Tìm data trong [...] hoặc sau QR:/DATA:
    pass

# Test
print(extract_qr_data("Scan result: [PRODUCT-123-ABC] ok"))`
        },
        testCases: [
            { input: ["Scan result: [PRODUCT-123-ABC] ok"], expected: ["PRODUCT-123-ABC"] },
            { input: ["QR:HelloWorld DATA:Test123"], expected: ["HelloWorld", "Test123"] },
            { input: ["no qr data"], expected: [] }
        ],
        solution: {
            javascript: `function extractQRData(s) {
    const bracket = s.match(/\\[([^\\]]+)\\]/g)?.map(m => m.slice(1, -1)) || [];
    const prefix = s.match(/(?:QR:|DATA:)(\\S+)/g)?.map(m => m.split(':')[1]) || [];
    return [...bracket, ...prefix];
}`,
            python: `def extract_qr_data(s):
    import re
    bracket = re.findall(r'\\[([^\\]]+)\\]', s)
    prefix = re.findall(r'(?:QR:|DATA:)(\\S+)', s)
    return bracket + prefix`
        }
    },
    {
        id: 57,
        title: "Extract GS1 DataMatrix",
        difficulty: "hard",
        category: "String/Regex",
        description: "Trích xuất dữ liệu GS1 DataMatrix. Format: (01)GTIN(17)EXPDATE(10)LOT. Tìm các nhóm trong ngoặc đơn.",
        hint: "Dùng regex để tìm pattern (XX)VALUE với XX là 2 số và VALUE là giá trị theo sau.",
        examples: [
            { input: 's = "(01)00012345678905(17)251231(10)ABC123"', output: '[{"ai":"01","value":"00012345678905"},{"ai":"17","value":"251231"},{"ai":"10","value":"ABC123"}]' }
        ],
        starterCode: {
            javascript: `function extractGS1Data(s) {
    // Viết code của bạn ở đây
    // Tìm pattern (XX)VALUE và trả về mảng objects

}

// Test
console.log(extractGS1Data("(01)00012345678905(17)251231(10)ABC123"));`,
            python: `def extract_gs1_data(s):
    # Viết code của bạn ở đây
    # Tìm pattern (XX)VALUE và trả về list dicts
    pass

# Test
print(extract_gs1_data("(01)00012345678905(17)251231(10)ABC123"))`
        },
        testCases: [
            { input: ["(01)00012345678905(17)251231(10)ABC123"], expected: [{ai:"01",value:"00012345678905"},{ai:"17",value:"251231"},{ai:"10",value:"ABC123"}] },
            { input: ["(01)12345678901234"], expected: [{ai:"01",value:"12345678901234"}] },
            { input: ["no gs1 data"], expected: [] }
        ],
        solution: {
            javascript: `function extractGS1Data(s) {
    const regex = /\\((\\d{2})\\)([^(]+)/g;
    const results = [];
    let match;
    while ((match = regex.exec(s)) !== null) {
        results.push({ ai: match[1], value: match[2] });
    }
    return results;
}`,
            python: `def extract_gs1_data(s):
    import re
    matches = re.findall(r'\\((\\d{2})\\)([^(]+)', s)
    return [{"ai": ai, "value": value} for ai, value in matches]`
        }
    },
    {
        id: 58,
        title: "Clean and Extract Barcode",
        difficulty: "easy",
        category: "String/Regex",
        description: "Làm sạch chuỗi và trích xuất barcode. Xóa tất cả ký tự không phải số, sau đó kiểm tra độ dài 8-14.",
        hint: "Dùng replace để xóa ký tự không phải số, sau đó kiểm tra độ dài.",
        examples: [
            { input: 's = "BC: 123-456-789-012"', output: '"123456789012"' },
            { input: 's = "1.2.3.4"', output: 'null' }
        ],
        starterCode: {
            javascript: `function cleanAndExtract(s) {
    // Viết code của bạn ở đây
    // Xóa ký tự không phải số, kiểm tra độ dài 8-14

}

// Test
console.log(cleanAndExtract("BC: 123-456-789-012"));`,
            python: `def clean_and_extract(s):
    # Viết code của bạn ở đây
    # Xóa ký tự không phải số, kiểm tra độ dài 8-14
    pass

# Test
print(clean_and_extract("BC: 123-456-789-012"))`
        },
        testCases: [
            { input: ["BC: 123-456-789-012"], expected: "123456789012" },
            { input: ["1.2.3.4"], expected: null },
            { input: ["A1B2C3D4E5F6G7H8"], expected: "12345678" }
        ],
        solution: {
            javascript: `function cleanAndExtract(s) {
    const digits = s.replace(/\\D/g, '');
    return digits.length >= 8 && digits.length <= 14 ? digits : null;
}`,
            python: `def clean_and_extract(s):
    import re
    digits = re.sub(r'\\D', '', s)
    return digits if 8 <= len(digits) <= 14 else None`
        }
    },
    {
        id: 59,
        title: "Validate Barcode Checksum",
        difficulty: "hard",
        category: "String/Math",
        description: "Kiểm tra checksum của mã vạch EAN-13. Chữ số cuối là check digit được tính từ 12 số đầu.",
        hint: "Tính tổng: số ở vị trí lẻ x1, số ở vị trí chẵn x3. Check digit = (10 - (tổng % 10)) % 10.",
        examples: [
            { input: 's = "4006381333931"', output: "true", explanation: "Check digit 1 là hợp lệ" },
            { input: 's = "4006381333932"', output: "false" }
        ],
        starterCode: {
            javascript: `function validateEAN13Checksum(s) {
    // Viết code của bạn ở đây
    // Kiểm tra checksum EAN-13

}

// Test
console.log(validateEAN13Checksum("4006381333931"));`,
            python: `def validate_ean13_checksum(s):
    # Viết code của bạn ở đây
    # Kiểm tra checksum EAN-13
    pass

# Test
print(validate_ean13_checksum("4006381333931"))`
        },
        testCases: [
            { input: ["4006381333931"], expected: true },
            { input: ["4006381333932"], expected: false },
            { input: ["5901234123457"], expected: true }
        ],
        solution: {
            javascript: `function validateEAN13Checksum(s) {
    if (s.length !== 13 || !/^\\d+$/.test(s)) return false;
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        sum += parseInt(s[i]) * (i % 2 === 0 ? 1 : 3);
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit === parseInt(s[12]);
}`,
            python: `def validate_ean13_checksum(s):
    if len(s) != 13 or not s.isdigit():
        return False
    total = sum(int(s[i]) * (1 if i % 2 == 0 else 3) for i in range(12))
    check_digit = (10 - (total % 10)) % 10
    return check_digit == int(s[12])`
        }
    },
    {
        id: 60,
        title: "Extract Multiple Barcode Types",
        difficulty: "hard",
        category: "String/Regex",
        description: "Trích xuất nhiều loại mã vạch từ chuỗi: EAN-13 (13 số), UPC-A (12 số), EAN-8 (8 số). Phân loại và trả về object.",
        hint: "Tìm tất cả chuỗi số, sau đó phân loại theo độ dài: 8=EAN-8, 12=UPC-A, 13=EAN-13.",
        examples: [
            { input: 's = "Products: 4006381333931, 012345678905, 12345670"', output: '{"ean13":["4006381333931"],"upca":["012345678905"],"ean8":["12345670"]}' }
        ],
        starterCode: {
            javascript: `function extractMultipleBarcodes(s) {
    // Viết code của bạn ở đây
    // Trả về {ean13: [], upca: [], ean8: []}

}

// Test
console.log(extractMultipleBarcodes("Products: 4006381333931, 012345678905, 12345670"));`,
            python: `def extract_multiple_barcodes(s):
    # Viết code của bạn ở đây
    # Trả về {"ean13": [], "upca": [], "ean8": []}
    pass

# Test
print(extract_multiple_barcodes("Products: 4006381333931, 012345678905, 12345670"))`
        },
        testCases: [
            { input: ["Products: 4006381333931, 012345678905, 12345670"], expected: {ean13:["4006381333931"],upca:["012345678905"],ean8:["12345670"]} },
            { input: ["no barcodes here"], expected: {ean13:[],upca:[],ean8:[]} }
        ],
        solution: {
            javascript: `function extractMultipleBarcodes(s) {
    const result = { ean13: [], upca: [], ean8: [] };
    const matches = s.match(/(?<!\\d)\\d{8}(?!\\d)|(?<!\\d)\\d{12}(?!\\d)|(?<!\\d)\\d{13}(?!\\d)/g) || [];
    for (const m of matches) {
        if (m.length === 13) result.ean13.push(m);
        else if (m.length === 12) result.upca.push(m);
        else if (m.length === 8) result.ean8.push(m);
    }
    return result;
}`,
            python: `def extract_multiple_barcodes(s):
    import re
    result = {"ean13": [], "upca": [], "ean8": []}
    matches = re.findall(r'(?<!\\d)(\\d{8}|\\d{12}|\\d{13})(?!\\d)', s)
    for m in matches:
        if len(m) == 13:
            result["ean13"].append(m)
        elif len(m) == 12:
            result["upca"].append(m)
        elif len(m) == 8:
            result["ean8"].append(m)
    return result`
        }
    }
];
