# Test Design Techniques

## 1. Quantity (1–10 per product)

### Equivalence Partitioning
| Partition | Values | Expected behavior | Test value |
|---|---|---|---|
| Too low | below 1 | Rejected | -3 |
| Valid | 1 to 10 | Accepted | 5 |
| Too high | above 10 | Rejected | 15 |
| Decimal numbers | 0.5, 1.5, ... | Not defined (behavior to be observed) | 2.5 |
| Non-numeric input | a, b, c, ... | Not defined (behavior to be observed) | abc |


### Boundary Value Analysis
| Boundary | Just below | At boundary | Just above |
|---|---|---|---|
| Minimum (1) | 0 | 1 | 2 |
| Maximum (10) | 9 | 10 | 11 |

### Final test values
| Value | Expected behavior |
|---|---|
| -3 | Rejected |
| 0 | Rejected |
| 1 | Accepted |
| 2 | Accepted |
| 5 | Accepted |
| 9 | Accepted |
| 10 | Accepted |
| 11 | Rejected |
| 15 | Rejected |
| 2.5 | Not defined (behavior to be observed) |
| abc | Not defined (behavior to be observed) |


## 2. Password Length (8–20 characters)
### Equivalence Partitioning
| Partition | Length | Expected behavior | Test password |
|---|---|---|---|
| Too short | less than 8 characters | Rejected | len05 |
| Valid | 8-20 characters | Accepted | length0010 |
| Too long | more than 20 characters | Rejected | lengthforpassword000023 |

### Boundary Value Analysis
| Boundary | Just below | At boundary | Just above |
|---|---|---|---|
| Minimum (8) | 7 (length7) | 8 (length08) | 9 (length009) |
| Maximum (20) | 19 (lengthforpassword19) | 20 (lengthforpassword020) | 21 (lengthforpassword0021) |

### Final test values
| Test password | Expected behavior |
|---|---|
| len05 | Rejected |
| length7 | Rejected |
| length08 | Accepted |
| length009 | Accepted |
| length0010 | Accepted |
| lengthforpassword19 | Accepted |
| lengthforpassword020 | Accepted |
| lengthforpassword0021 | Rejected |
| lengthforpassword000023 | Rejected |



