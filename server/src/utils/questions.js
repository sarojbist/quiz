const questions = [
  // Memory Management
  {
    description: "Which of the following is a valid page replacement algorithm?",
    options: ["FIFO", "LRU", "SJF", "Round Robin"],
    correct_answer: "LRU",
    topic: "memory-management"
  },
  {
    description: "What is the purpose of paging in an operating system?",
    options: ["To reduce process execution time", "To allocate memory more efficiently", "To manage I/O operations", "To handle deadlocks"],
    correct_answer: "To allocate memory more efficiently",
    topic: "memory-management"
  },
  {
    description: "Which of the following is a type of fragmentation?",
    options: ["Internal", "External", "Both", "None"],
    correct_answer: "Both",
    topic: "memory-management"
  },
  {
    description: "What is a page fault?",
    options: ["When a page is not found in memory", "When a process is terminated", "When a file is corrupted", "When the CPU malfunctions"],
    correct_answer: "When a page is not found in memory",
    topic: "memory-management"
  },
  {
    description: "The translation of a logical address to a physical address is done by:",
    options: ["Memory Management Unit (MMU)", "I/O Controller", "CPU", "Disk Controller"],
    correct_answer: "Memory Management Unit (MMU)",
    topic: "memory-management"
  },
  {
    description: "Which of these is a valid memory allocation strategy?",
    options: ["Best Fit", "Worst Fit", "First Fit", "All of the above"],
    correct_answer: "All of the above",
    topic: "memory-management"
  },
  {
    description: "Virtual memory is a feature that:",
    options: ["Increases RAM capacity", "Uses hard disk space as memory", "Optimizes CPU performance", "Allocates CPU cores to processes"],
    correct_answer: "Uses hard disk space as memory",
    topic: "memory-management"
  },
  {
    description: "The main difference between paging and segmentation is:",
    options: ["Paging divides memory into fixed-size units, segmentation divides into variable-size units", "Paging is faster than segmentation", "Segmentation is a part of paging", "There is no difference"],
    correct_answer: "Paging divides memory into fixed-size units, segmentation divides into variable-size units",
    topic: "memory-management"
  },
  {
    description: "What is the purpose of a TLB (Translation Lookaside Buffer)?",
    options: ["To speed up memory access", "To reduce CPU load", "To manage cache memory", "To increase network speed"],
    correct_answer: "To speed up memory access",
    topic: "memory-management"
  },
  {
    description: "In memory management, swapping is the process of:",
    options: ["Switching between processes", "Moving a process to disk and back to memory", "Allocating memory to processes", "Managing CPU scheduling"],
    correct_answer: "Moving a process to disk and back to memory",
    topic: "memory-management"
  },

  // Process Scheduling
  {
    description: "What is the primary purpose of a process scheduler?",
    options: ["Allocate memory", "Select which process to run", "Manage I/O devices", "Handle interrupts"],
    correct_answer: "Select which process to run",
    topic: "process-scheduling"
  },
  {
    description: "Which scheduling algorithm is known for causing the convoy effect?",
    options: ["First-Come, First-Served (FCFS)", "Round Robin", "Shortest Job First (SJF)", "Priority Scheduling"],
    correct_answer: "First-Come, First-Served (FCFS)",
    topic: "process-scheduling"
  },
  {
    description: "Which of these is a preemptive scheduling algorithm?",
    options: ["Round Robin", "FCFS", "SJF", "Priority Scheduling (Non-preemptive)"],
    correct_answer: "Round Robin",
    topic: "process-scheduling"
  },
  {
    description: "What is a context switch?",
    options: ["Switching from one process to another", "Shutting down the system", "Moving a process to a new memory location", "Changing memory allocation"],
    correct_answer: "Switching from one process to another",
    topic: "process-scheduling"
  },
  {
    description: "In Round Robin scheduling, the time allocated to each process in each cycle is called:",
    options: ["Quantum", "Turnaround Time", "Throughput", "Latency"],
    correct_answer: "Quantum",
    topic: "process-scheduling"
  },
  {
    description: "Which of the following improves CPU utilization?",
    options: ["Multiprogramming", "Single programming", "Deallocating memory", "None of the above"],
    correct_answer: "Multiprogramming",
    topic: "process-scheduling"
  },
  {
    description: "Shortest Job First (SJF) scheduling is optimal for:",
    options: ["Minimizing average waiting time", "Minimizing throughput", "Maximizing process priority", "Maximizing CPU usage"],
    correct_answer: "Minimizing average waiting time",
    topic: "process-scheduling"
  },
  {
    description: "What does the dispatcher do in process scheduling?",
    options: ["Switches context between processes", "Allocates memory", "Handles I/O operations", "Manages files"],
    correct_answer: "Switches context between processes",
    topic: "process-scheduling"
  },
  {
    description: "Which scheduling algorithm gives priority to processes based on their length?",
    options: ["Shortest Job First (SJF)", "Round Robin", "Priority Scheduling", "First-Come, First-Served (FCFS)"],
    correct_answer: "Shortest Job First (SJF)",
    topic: "process-scheduling"
  },
  {
    description: "In which scheduling algorithm does the process with the least CPU burst time get scheduled first?",
    options: ["Shortest Job First (SJF)", "Round Robin", "FCFS", "Priority Scheduling"],
    correct_answer: "Shortest Job First (SJF)",
    topic: "process-scheduling"
  },

  // File Systems
  {
    description: "Which of the following is not a valid file system?",
    options: ["NTFS", "EXT4", "FAT32", "IPV4"],
    correct_answer: "IPV4",
    topic: "file-systems"
  },
  {
    description: "What is the purpose of a file allocation table (FAT)?",
    options: ["To manage file storage locations", "To allocate memory", "To handle network traffic", "To control user access"],
    correct_answer: "To manage file storage locations",
    topic: "file-systems"
  },
  {
    description: "Which of the following is an example of a journaling file system?",
    options: ["EXT4", "NTFS", "FAT32", "All of the above"],
    correct_answer: "All of the above",
    topic: "file-systems"
  },
  {
    description: "What is an inode in a file system?",
    options: ["An index of files and directories", "A process identifier", "A memory block", "A lock manager"],
    correct_answer: "An index of files and directories",
    topic: "file-systems"
  },
  {
    description: "Which file system operation is responsible for creating, deleting, and renaming files?",
    options: ["File Management", "File Allocation", "Directory Management", "Disk Partitioning"],
    correct_answer: "File Management",
    topic: "file-systems"
  },
  {
    description: "Which of the following file systems is commonly used on Linux?",
    options: ["EXT4", "NTFS", "FAT32", "APFS"],
    correct_answer: "EXT4",
    topic: "file-systems"
  },
  {
    description: "Which of the following is a valid disk scheduling algorithm?",
    options: ["SSTF", "FCFS", "LOOK", "All of the above"],
    correct_answer: "All of the above",
    topic: "file-systems"
  },
  {
    description: "What is the primary purpose of the file descriptor?",
    options: ["To access a file", "To store a file", "To encrypt a file", "To delete a file"],
    correct_answer: "To access a file",
    topic: "file-systems"
  },
  {
    description: "Which of the following is a valid directory structure?",
    options: ["Single-level", "Two-level", "Tree-structured", "All of the above"],
    correct_answer: "All of the above",
    topic: "file-systems"
  },
  {
    description: "What is fragmentation in a file system?",
    options: ["The splitting of files into parts stored at non-contiguous locations", "Compressing large files", "Splitting memory allocation", "Deleting unused files"],
    correct_answer: "The splitting of files into parts stored at non-contiguous locations",
    topic: "file-systems"
  }
];

module.exports = questions; 