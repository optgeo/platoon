task :world do
  sh <<-EOS
curl --silent https://raw.githubusercontent.com/optgeo/mille-plateaux/main/quilt.csv | grep bldg_texture | rake sub1
  EOS
end

task :sub1 do
  w = File.open('index.html', 'w')
  w.print <<-EOS
<?doctype html>
<html>
<body>
<ul>
  EOS
  while STDIN.gets
    r = $_.split(',')[0].split('_')
    cid = $_.strip.split(',')[-1]
    w.print <<-EOS
<li>#{r[1]} <a href="v.html?cid=#{cid}">online</a> / <a href="o.html?cid=#{cid}">offline</a></li>
    EOS
    sh <<-EOS
ipfs get --progress #{cid}
    EOS
  end
  w.print <<-EOS
</ul>
</body>
</html>
  EOS
  w.close
end

task :host do
  sh <<-EOS
budo -d .
  EOS
end

