Example tests
    ▶example1
    example test n=1041=10000010001_2✔OK
    1.0.072 sOK
    ▶example2
    example test n=15=1111_2✔OK
    1.0.072 sOK
    ▶example3
    example test n=32=100000_2✔OK
    1.0.072 sOK

Correctness tests
▶extremes
    n=1, n=5=101_2 and n=2147483647=2**31-1✔OK
    1.0.072 sOK
    2.0.072 sOK
    3.0.072 sOK
▶trailing_zeroes
    n=6=110_2 and n=328=101001000_2✔OK
    1.0.072 sOK
    2.0.072 sOK
▶power_of_2
    n=5=101_2, n=16=2**4 and n=1024=2**10✔OK
    1.0.072 sOK
    2.0.072 sOK
    3.0.072 sOK
▶simple1
    n=9=1001_2 and n=11=1011_2✔OK
    1.0.072 sOK
    2.0.072 sOK
▶simple2
    n=19=10011 and n=42=101010_2✔OK
    1.0.072 sOK
    2.0.072 sOK
▶simple3
    n=1162=10010001010_2 and n=5=101_2✔OK
    1.0.072 sOK
    2.0.072 sOK
▶medium1
    n=51712=110010100000000_2 and n=20=10100_2✔OK
    1.0.072 sOK
    2.0.072 sOK
▶medium2
    n=561892=10001001001011100100_2 and n=9=1001_2✔OK
    1.0.072 sOK
    2.0.072 sOK
    
▶medium3
    n=66561=10000010000000001_2✘WRONG ANSWER
    got 5 expected 9
    1.0.072 sWRONG ANSWER, got 5 expected 9
▶large1
    n=6291457=11000000000000000000001_2✘WRONG ANSWER
    got 0 expected 20
    1.0.072 sWRONG ANSWER, got 0 expected 20
▶large2
    n=74901729=100011101101110100011100001✘WRONG ANSWER
    got 3 expected 4
    1.0.072 sWRONG ANSWER, got 3 expected 4
▶large3
    n=805306373=110000000000000000000000000101_2✘WRONG ANSWER
    got 0 expected 25
    1.0.072 sWRONG ANSWER, got 0 expected 25
▶large4
    n=1376796946=1010010000100000100000100010010_2✘WRONG ANSWER
    got 4 expected 5
    1.0.076 sWRONG ANSWER, got 4 expected 5
▶large5
    n=1073741825=1000000000000000000000000000001_2✘WRONG ANSWER
    got 0 expected 29
    1.0.072 sWRONG ANSWER, got 0 expected 29
▶large6
    n=1610612737=1100000000000000000000000000001_2✘WRONG ANSWER
    got 0 expected 28
    1.0.076 sWRONG ANSWER, got 0 expected 28

