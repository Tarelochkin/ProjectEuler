# for a better perfomance we take for granted that the first two prime numbers are 2 and 3.

i = 3 #the last known prime number
pCount = 2 #prime numbers total
dividers = [2,3]

while (pCount < 10)
	i = i + 1
	sq = Math.sqrt(i).floor
	if (dividers.last < sq) && (sq % 2 != 0) && (sq % 3 != 0)
		dividers.push sq
	end

	dividers.each do |j|
		break if (i % j == 0)
		if j == dividers.last
			pCount = pCount + 1
		end
	end

end

puts(i)
