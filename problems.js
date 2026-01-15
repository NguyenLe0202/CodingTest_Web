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
    }
];
