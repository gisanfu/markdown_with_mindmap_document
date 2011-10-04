#!/bin/perl

use FreeMind::Convert ;

my $mm = FreeMind::Convert->new() ;
#$mm->setOutputJcode('sjis') ; # set Japanese Chara code.
#$mm->loadFile($file) ;
$mm->loadFile('other_files/mind.mm') ;
print $mm->toText() ;         # convert to plan text format.
