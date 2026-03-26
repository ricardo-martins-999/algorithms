# Sorting Algorithms

## Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order.

On each pass through the array, the largest unsorted element "bubbles up" to its correct position at the end of the list.

The name comes from the way larger elements gradually move toward the end of the array, similar to how air bubbles rise to the surface of water.

### Bubble Complexity

| Case    | Time Complexity |
|---------|-----------------|
| Best    | O(n)            |
| Average | O(n²)           |
| Worst   | O(n²)           |

| Metric            | Value |
|-------------------|-------|
| Space Complexity  | O(1)  |
| Stability         | Yes   |

> Best case occurs when the array is already sorted and the optimized version with early termination is used.

## Selection Sort

Selection Sort is a simple sorting algorithm that divides the array into a sorted and an unsorted portion.

On each iteration, it selects the smallest element from the unsorted portion and places it at the beginning of the sorted portion.

Unlike Bubble Sort, it performs at most one swap per iteration, making it efficient in terms of the number of swaps.

### Selection Complexity

| Case    | Time Complexity |
|---------|-----------------|
| Best    | O(n²)           |
| Average | O(n²)           |
| Worst   | O(n²)           |

| Metric            | Value |
|-------------------|-------|
| Space Complexity  | O(1)  |
| Stability         | No    |

> Selection Sort does not benefit from early termination and always performs O(n²) comparisons, regardless of the initial order of the array.

## Visualization

You can visualize these algorithms here: [Click me](https://visualgo.net/en/sorting)

## References

- <https://www.programiz.com/dsa/bubble-sort>
- <https://www.programiz.com/dsa/selection-sort>
- <https://www.w3schools.com/dsa/dsa_algo_bubblesort.php>
- <https://www.w3schools.com/dsa/dsa_algo_selectionsort.php>
