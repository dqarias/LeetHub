# @param {Integer} n
# @return {Integer}
def climb_stairs(n)
    #input 2 => 2
    #input 3 => 3
    #input 4 => 5
    #input 5 => 8
    #input 6 => 13
    
    return n if n <4
    first = 2
    second = 3
    
   (4...n).each do
        temp = first + second
        first = second
        second = temp
   end
        first + second
end