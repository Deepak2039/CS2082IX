const pythonQuestions = [
    {
        question: "What is the output of: print(type(5))",
        options: [
            "<class 'int'>",
            "<class 'float'>",
            "<class 'number'>",
            "<class 'digit'>"
        ],
        answer: 0,
        explanation: "The type() function returns the type of the object. For the integer 5, it returns <class 'int'>."
    },
    {
        question: "Which of the following is NOT a valid Python variable name?",
        options: [
            "my_variable",
            "_myvariable",
            "1variable",
            "variable1"
        ],
        answer: 2,
        explanation: "Variable names in Python cannot start with a number. '1variable' is invalid because it starts with a digit."
    },
    {
        question: "What does the '//' operator do in Python?",
        options: [
            "Performs integer division",
            "Performs float division",
            "Raises a number to a power",
            "Returns the remainder of division"
        ],
        answer: 0,
        explanation: "The '//' operator performs floor division (integer division) in Python, which returns the largest integer less than or equal to the division result."
    },
    {
        question: "Which of the following creates a tuple in Python?",
        options: [
            "x = {}",
            "x = []",
            "x = ()",
            "x = {}"
        ],
        answer: 2,
        explanation: "Tuples are created using parentheses (). The empty tuple is created with just parentheses: x = ()"
    },
    {
        question: "What is the output of: print('Hello' + 3 * '!')",
        options: [
            "Hello!!!",
            "Hello!Hello!Hello!",
            "TypeError",
            "Hello!3"
        ],
        answer: 0,
        explanation: "The expression evaluates to 'Hello' + '!!!' which concatenates to 'Hello!!!'."
    },
    {
        question: "Which method would you use to get the index of an item in a list?",
        options: [
            "list.find(item)",
            "list.index(item)",
            "list.search(item)",
            "list.get_index(item)"
        ],
        answer: 1,
        explanation: "The index() method returns the index of the first occurrence of the specified value."
    },
    {
        question: "What is the output of: print(3 * 'abc' + 'xyz')",
        options: [
            "abcabcabcxyz",
            "3abcxyz",
            "abc abc abc xyz",
            "TypeError"
        ],
        answer: 0,
        explanation: "Multiplying a string by an integer n creates a new string with the original repeated n times."
    },
    {
        question: "Which of the following is NOT a valid way to create a dictionary?",
        options: [
            "d = {}",
            "d = dict()",
            "d = {1: 'one', 2: 'two'}",
            "d = (1: 'one', 2: 'two')"
        ],
        answer: 3,
        explanation: "Dictionaries use curly braces {} with key:value pairs, not parentheses."
    },
    {
        question: "What is the output of: print(bool('False'))",
        options: [
            "False",
            "True",
            "None",
            "Error"
        ],
        answer: 1,
        explanation: "Any non-empty string is considered True in a boolean context, even if the string is 'False'."
    },
    {
        question: "Which of the following is used to define a function in Python?",
        options: [
            "function my_func():",
            "def my_func():",
            "define my_func():",
            "func my_func():"
        ],
        answer: 1,
        explanation: "In Python, functions are defined using the 'def' keyword followed by the function name and parentheses."
    },
    {
        question: "What is the output of: print([i for i in range(5) if i % 2 == 0])",
        options: [
            "[0, 2, 4]",
            "[1, 3]",
            "[0, 1, 2, 3, 4]",
            "[2, 4]"
        ],
        answer: 0,
        explanation: "This list comprehension creates a list of even numbers from 0 to 4 (inclusive)."
    },
    {
        question: "Which of the following is used to open a file for both reading and writing?",
        options: [
            "'r'",
            "'w'",
            "'a'",
            "'r+'"
        ],
        answer: 3,
        explanation: "The 'r+' mode opens the file for both reading and writing."
    },
    {
        question: "What is the output of: print('Python'[1])",
        options: [
            "'P'",
            "'y'",
            "'t'",
            "'h'"
        ],
        answer: 1,
        explanation: "String indices start at 0, so index 1 refers to the second character 'y'."
    },
    {
        question: "Which of the following is used to handle exceptions in Python?",
        options: [
            "try/except",
            "try/catch",
            "error/except",
            "catch/except"
        ],
        answer: 0,
        explanation: "Python uses try/except blocks to handle exceptions."
    },
    {
        question: "What is the output of: print(2 ** 3 ** 2)",
        options: [
            "64",
            "512",
            "36",
            "Error"
        ],
        answer: 1,
        explanation: "Exponentiation has right-to-left associativity, so it's evaluated as 2 ** (3 ** 2) = 2 ** 9 = 512."
    },
    {
        question: "Which of the following is used to remove an item from a list by value?",
        options: [
            "list.remove(item)",
            "list.delete(item)",
            "list.pop(item)",
            "list.discard(item)"
        ],
        answer: 0,
        explanation: "The remove() method removes the first occurrence of the specified value."
    },
    {
        question: "What is the output of: print('Hello'.lower())",
        options: [
            "hello",
            "HELLO",
            "Hello",
            "Error"
        ],
        answer: 0,
        explanation: "The lower() method returns a copy of the string converted to lowercase."
    },
    {
        question: "Which of the following is used to import a module named 'math'?",
        options: [
            "include math",
            "import math",
            "using math",
            "require math"
        ],
        answer: 1,
        explanation: "In Python, modules are imported using the 'import' keyword."
    },
    {
        question: "What is the output of: print(len(['a', 'b', 'c']))",
        options: [
            "3",
            "2",
            "6",
            "Error"
        ],
        answer: 0,
        explanation: "The len() function returns the number of items in the list, which is 3."
    },
    {
        question: "Which of the following is used to add an item to the end of a list?",
        options: [
            "list.add(item)",
            "list.append(item)",
            "list.insert(item)",
            "list.push(item)"
        ],
        answer: 1,
        explanation: "The append() method adds an item to the end of the list."
    },
    {
        question: "What is the output of: print('Python'.find('th'))",
        options: [
            "2",
            "3",
            "True",
            "-1"
        ],
        answer: 0,
        explanation: "The find() method returns the lowest index of the substring if found, which is 2 for 'th' in 'Python'."
    },
    {
        question: "Which of the following is used to sort a list in place?",
        options: [
            "list.sorted()",
            "list.sort()",
            "sorted(list)",
            "sort(list)"
        ],
        answer: 1,
        explanation: "The sort() method sorts the list in place, while sorted() returns a new sorted list."
    },
    {
        question: "What is the output of: print('hello'.capitalize())",
        options: [
            "Hello",
            "hello",
            "HELLO",
            "hELLO"
        ],
        answer: 0,
        explanation: "The capitalize() method returns a copy of the string with its first character capitalized and the rest lowercased."
    },
    {
        question: "Which of the following is used to check if a key exists in a dictionary?",
        options: [
            "dict.has_key(key)",
            "key in dict",
            "dict.exists(key)",
            "dict.contains(key)"
        ],
        answer: 1,
        explanation: "The 'in' keyword is used to check if a key exists in a dictionary."
    },
    {
        question: "What is the output of: print('Python'[::-1])",
        options: [
            "nohtyP",
            "Python",
            "P",
            "Error"
        ],
        answer: 0,
        explanation: "The slice [::-1] is a common Python idiom for reversing a string."
    },
    {
        question: "Which of the following is used to create a new class in Python?",
        options: [
            "class MyClass:",
            "def MyClass():",
            "new class MyClass:",
            "class = MyClass()"
        ],
        answer: 0,
        explanation: "Classes in Python are created using the 'class' keyword followed by the class name and a colon."
    },
    {
        question: "What is the output of: print(3 * 'ab' + 'c')",
        options: [
            "abababc",
            "3abc",
            "ab ab ab c",
            "Error"
        ],
        answer: 0,
        explanation: "Multiplying a string by an integer n creates a new string with the original repeated n times."
    },
    {
        question: "Which of the following is used to remove and return the last item in a list?",
        options: [
            "list.remove_last()",
            "list.pop()",
            "list.pop_last()",
            "list.del()"
        ],
        answer: 1,
        explanation: "The pop() method without arguments removes and returns the last item in the list."
    },
    {
        question: "What is the output of: print(10 / 3)",
        options: [
            "3",
            "3.333...",
            "3.0",
            "Error"
        ],
        answer: 1,
        explanation: "The / operator performs float division in Python 3, so 10 / 3 = 3.333..."
    },
    {
        question: "Which of the following is used to create a set in Python?",
        options: [
            "s = {}",
            "s = set()",
            "s = []",
            "s = ()"
        ],
        answer: 1,
        explanation: "An empty set is created using set(). {} creates an empty dictionary."
    },
    {
        question: "What is the output of: print('Python'.replace('P', 'J'))",
        options: [
            "Jython",
            "Python",
            "JythonJ",
            "Error"
        ],
        answer: 0,
        explanation: "The replace() method replaces all occurrences of the first argument with the second argument."
    },
    {
        question: "Which of the following is used to get a list of all keys in a dictionary?",
        options: [
            "dict.keys()",
            "dict.get_keys()",
            "dict.all_keys()",
            "dict.list_keys()"
        ],
        answer: 0,
        explanation: "The keys() method returns a view object containing the dictionary's keys."
    },
    {
        question: "What is the output of: print(1 + 2 * 3 ** 2)",
        options: [
            "19",
            "27",
            "15",
            "Error"
        ],
        answer: 0,
        explanation: "Following operator precedence: 3**2=9, then 2*9=18, then 1+18=19."
    },
    {
        question: "Which of the following is used to convert a string to an integer?",
        options: [
            "int(str)",
            "str.to_int()",
            "convert.to_int(str)",
            "parseInt(str)"
        ],
        answer: 0,
        explanation: "The int() function is used to convert a string to an integer."
    },
    {
        question: "What is the output of: print('hello'.upper())",
        options: [
            "HELLO",
            "Hello",
            "hello",
            "Error"
        ],
        answer: 0,
        explanation: "The upper() method returns a copy of the string converted to uppercase."
    },
    {
        question: "Which of the following is used to check if an object is an instance of a specific class?",
        options: [
            "isinstance()",
            "type()",
            "classof()",
            "instanceof()"
        ],
        answer: 0,
        explanation: "The isinstance() function checks if an object is an instance of a specific class."
    },
    {
        question: "What is the output of: print(len('Python'))",
        options: [
            "6",
            "5",
            "7",
            "Error"
        ],
        answer: 0,
        explanation: "The len() function returns the number of characters in the string, which is 6."
    },
    {
        question: "Which of the following is used to read a line from a file object?",
        options: [
            "file.read()",
            "file.readline()",
            "file.get_line()",
            "file.next()"
        ],
        answer: 1,
        explanation: "The readline() method reads a single line from the file."
    },
    {
        question: "What is the output of: print('Python'.split('t'))",
        options: [
            "['Py', 'hon']",
            "['P', 'y', 't', 'h', 'o', 'n']",
            "['Pyth', 'on']",
            "Error"
        ],
        answer: 0,
        explanation: "The split() method splits the string at each occurrence of the specified separator 't'."
    },
    {
        question: "Which of the following is used to remove all items from a dictionary?",
        options: [
            "dict.clear()",
            "dict.remove_all()",
            "dict.empty()",
            "del dict"
        ],
        answer: 0,
        explanation: "The clear() method removes all items from the dictionary."
    },
    {
        question: "What is the output of: print(3 + 5 * 2)",
        options: [
            "16",
            "13",
            "25",
            "Error"
        ],
        answer: 1,
        explanation: "Following operator precedence: 5*2=10, then 3+10=13."
    },
    {
        question: "Which of the following is used to get the current working directory?",
        options: [
            "os.getcwd()",
            "os.cwd()",
            "os.pwd()",
            "os.current_dir()"
        ],
        answer: 0,
        explanation: "The os.getcwd() function returns a string representing the current working directory."
    },
    {
        question: "What is the output of: print('Python'.endswith('on'))",
        options: [
            "True",
            "False",
            "1",
            "Error"
        ],
        answer: 0,
        explanation: "The endswith() method returns True if the string ends with the specified suffix 'on'."
    },
    {
        question: "Which of the following is used to create a copy of a list?",
        options: [
            "list.copy()",
            "list.clone()",
            "list.duplicate()",
            "list = other_list"
        ],
        answer: 0,
        explanation: "The copy() method returns a shallow copy of the list."
    },
    {
        question: "What is the output of: print('Python'.isalpha())",
        options: [
            "True",
            "False",
            "1",
            "Error"
        ],
        answer: 0,
        explanation: "The isalpha() method returns True if all characters in the string are alphabetic."
    },
    {
        question: "Which of the following is used to get the current date and time?",
        options: [
            "datetime.now()",
            "time.now()",
            "datetime.today()",
            "date.current()"
        ],
        answer: 0,
        explanation: "datetime.now() returns the current local date and time."
    },
    {
        question: "What is the output of: print('Python'[1:4])",
        options: [
            "yth",
            "Pyt",
            "ytho",
            "Error"
        ],
        answer: 0,
        explanation: "String slicing [1:4] returns characters from index 1 to 3 (4-1)."
    },
    {
        question: "Which of the following is used to convert a value to a string?",
        options: [
            "str(value)",
            "value.toString()",
            "string(value)",
            "convert.to_string(value)"
        ],
        answer: 0,
        explanation: "The str() function converts the specified value into a string."
    },
    {
        question: "What is the output of: print(10 // 3)",
        options: [
            "3",
            "3.333...",
            "3.0",
            "Error"
        ],
        answer: 0,
        explanation: "The // operator performs integer division, discarding the fractional part."
    },
    {
        question: "Which of the following is used to add an item at a specific position in a list?",
        options: [
            "list.add(index, item)",
            "list.insert(index, item)",
            "list.append_at(index, item)",
            "list.put(index, item)"
        ],
        answer: 1,
        explanation: "The insert() method inserts an item at the specified position in the list."
    },
    {
        question: "What is the output of: print('Python'.find('z'))",
        options: [
            "-1",
            "None",
            "0",
            "Error"
        ],
        answer: 0,
        explanation: "The find() method returns -1 if the substring is not found."
    },
    {
        question: "Which of the following is used to get the number of key-value pairs in a dictionary?",
        options: [
            "len(dict)",
            "dict.size()",
            "dict.length()",
            "dict.count()"
        ],
        answer: 0,
        explanation: "The len() function returns the number of items (key-value pairs) in the dictionary."
    },
    {
        question: "What is the output of: print('Python'.strip('P'))",
        options: [
            "ython",
            "Pytho",
            "ytho",
            "Python"
        ],
        answer: 0,
        explanation: "The strip() method removes the specified leading character 'P' from the string."
    },
    {
        question: "Which of the following is used to create a new list that is a sorted version of an existing list?",
        options: [
            "list.sorted()",
            "sorted(list)",
            "list.sort()",
            "sort(list)"
        ],
        answer: 1,
        explanation: "The sorted() function returns a new sorted list from the items in the iterable."
    }
];
