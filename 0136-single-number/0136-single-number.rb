# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
    single = Hash.new(0)
    nums.each do |num| 
        single[num]+=1
    end
    p single.key(1)
end